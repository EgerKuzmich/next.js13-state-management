import { Box, Button, Form, Grid, Heading, TextArea } from 'grommet';
import { ITimeSheet } from '../TimeSheet/types';
import { useCallback, useState } from 'react';
import { UiTimeSheetModal } from './ui';
import { SubmitButton } from 'ui/Button/Submit';
import DateInput, { IDateInputProps } from 'ui/form/DateInput';
import { DATE_FORMAT } from 'utils/constants';
import dayjs from 'dayjs';
import { DURATION_REGEXP, parseDuration } from './utils';
import { TimeSheetService } from 'modules/TimeSheet/api';

interface IEditTimeSheetModalProps {
  onClose: () => void;
  value: ITimeSheet;
}

interface ITimeSheetFormValues {
  date: string;
  time: string;
  duration: string;
  comment?: string;
}

const GRID_PROPS = {
  rows: ['auto', 'flex', 'auto'],
  columns: ['flex', 'flex', 'flex'],
  areas: [
    { name: 'duration', start: [0, 0], end: [1, 0] },
    { name: 'date', start: [1, 0], end: [1, 0] },
    { name: 'time', start: [2, 0], end: [2, 0] },
    { name: 'comment', start: [0, 1], end: [2, 1] },
    { name: 'actions', start: [0, 2], end: [2, 2] },
  ],
};

const FORM_MESSAGES = {
  required: 'Обязательное поле',
  invalid: 'Неверное значение',
};

const VALIDATE = {
  DURATION: (value: string) => (value.match(DURATION_REGEXP) ? undefined : 'Введите корректное значение'),
  DATE: (value: string) => (dayjs(value, DATE_FORMAT.SHORT).isValid() ? undefined : 'Введите полное значение'),
  TIME: (value: string) => (dayjs(value, DATE_FORMAT.TIME).isValid() ? undefined : 'Введите полное значение'),
};

const getInitialValues = (value: ITimeSheet): ITimeSheetFormValues => {
  const { createdAt, comment, duration: initialDuration } = value;

  const date = dayjs(createdAt).format(DATE_FORMAT.SHORT);
  const time = dayjs(createdAt).format(DATE_FORMAT.TIME);
  const duration = dayjs.duration(initialDuration).humanize();

  return {
    date,
    time,
    duration,
    comment,
  };
};

const timeSheetService = new TimeSheetService();

const TimeSheetModal = ({ onClose, value: initialValue }: IEditTimeSheetModalProps) => {
  const [data, setData] = useState<ITimeSheetFormValues>(() => getInitialValues(initialValue));

  const isEditMode = Boolean(initialValue.id);

  const onSubmit = useCallback(async () => {
    const { duration, date, time, comment } = data;
    const {
      id: workLogId,
      issue: { id: issueId },
    } = initialValue;

    const dateTime = dayjs(`${date} ${time}`, DATE_FORMAT.FULL).toISOString();

    const parsedDuration = parseDuration(duration);

    const sendData = {
      duration: parsedDuration,
      ...(isEditMode ? {} : { start: dateTime }),
      comment,
    };

    return await timeSheetService.editTimeSheet({
      issueId,
      workLogId,
      data: sendData,
    });
  }, [data, isEditMode, initialValue]);

  return (
    <UiTimeSheetModal onClickOutside={onClose}>
      <Box pad={'medium'}>
        <Form value={data} onSubmit={onSubmit} onChange={setData} messages={FORM_MESSAGES} validate="blur">
          <Heading level={2} size="medium" margin={{ top: 'none', bottom: 'large' }}>
            Редактирование отчета
          </Heading>

          <Grid fill gap="medium" {...GRID_PROPS}>
            <UiTimeSheetModal.FieldDuration name="duration" label="Затрачено времени" validate={VALIDATE.DURATION} />

            <UiTimeSheetModal.FieldDate
              name="date"
              label="Дата"
              required
              disabled={isEditMode}
              component={(props: IDateInputProps) => <DateInput {...props} disabled={isEditMode} />}
            />

            <UiTimeSheetModal.FieldTime name="time" label="Время начала" disabled={isEditMode} required type="time" />

            <UiTimeSheetModal.FieldComment name="comment" label="Комментарий" component={TextArea} />

            <Box gridArea="actions" direction="row" justify="start" gap="medium">
              <SubmitButton type="submit" size="medium" color="status-ok" onSubmit={onSubmit} />

              <Button label="Отмена" onClick={onClose} />
            </Box>
          </Grid>
        </Form>
      </Box>
    </UiTimeSheetModal>
  );
};

export default TimeSheetModal;
