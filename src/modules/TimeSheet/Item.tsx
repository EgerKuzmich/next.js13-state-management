import { Box, Card, Text } from 'grommet';
import { ITimeSheet } from './types';
import dayjs from 'dayjs';
import { memo, useMemo, useState } from 'react';
import TimeSheetModal from '../TimeSheetModal';
import { UiCard } from 'ui/Card';

dayjs.locale('ru');

const TimeSheetItem = (props: ITimeSheet) => {
  const { createdAt, updatedBy, duration, comment } = props;

  const [isEditMode, setIsEditMode] = useState(false);

  const { display: name } = updatedBy;

  const createdLabel = useMemo(() => dayjs(createdAt).locale('ru').format('DD MMM YYYY HH:mm'), [createdAt]);

  const formattedDuration = dayjs.duration(duration).humanize();

  const toggleEditMode = () => {
    setIsEditMode((prev) => !prev);
  };

  return (
    <>
      <UiCard.Item>
        <Card pad={{ top: 'small', right: 'small', bottom: 'medium', left: 'small' }} gap="small" background="light-1">
          <Box gap="small" direction="row" align="center">
            <UiCard.EditButton onClick={toggleEditMode} />

            <Text size="medium">{name}</Text>

            <UiCard.TimeLabel date-time={createdAt}>{createdLabel}</UiCard.TimeLabel>
          </Box>

          <Box gap="small" pad={{ left: '60px' }}>
            <Text size="small" weight="bold">
              Затрачено времени:
              <Text weight="normal" size="small">
                {` ${formattedDuration}`}
              </Text>
            </Text>

            {Boolean(comment) && (
              <Text size="small" weight="bold">
                Комментарий:
                <Text weight="normal" size="small">
                  {` ${comment}`}
                </Text>
              </Text>
            )}
          </Box>
        </Card>
      </UiCard.Item>

      {isEditMode && <TimeSheetModal value={props} onClose={toggleEditMode} />}
    </>
  );
};

export default memo(TimeSheetItem);
