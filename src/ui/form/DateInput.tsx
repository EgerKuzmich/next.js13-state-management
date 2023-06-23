import dayjs from 'dayjs';
import { Button, Calendar, DateInputExtendedProps, Drop, TextInput } from 'grommet';
import { FormCalendar } from 'grommet-icons';
import { RefObject, useRef, useState } from 'react';
import styled from 'styled-components';
import { DATE_FORMAT } from 'utils/constants';

export interface IDatePickerProps extends Omit<DateInputExtendedProps, 'value'> {
  id?: string;
  value?: string;
  target: RefObject<HTMLElement>;
}

export interface IDateInputProps {
  id: string;
  value: string;
  onChange: (event: { value: string | string[] }) => void;
  disabled?: boolean;
}

const DEF_DATE = new Date().toISOString();

const DateInputWrapper = styled.div`
  position: relative;
`;

const DropButton = styled(Button)`
  position: absolute;
  z-index: 10;
  right: 2px;
  top: 50%;
  padding: 10px;
  background-color: ${({ disabled }) => (disabled ? 'var(--bg-disabled)' : 'var(--bg-white)')};
  transform: translateY(-50%);
`;

const DateField = styled(TextInput)`
  border: none;
`;

const DateInput = (props: Partial<IDateInputProps>) => {
  const { onChange, value, disabled } = props;

  const [open, setOpen] = useState(false);

  const wrapRef = useRef<HTMLDivElement>(null);

  const showDropCalendar = open && wrapRef.current && !disabled;

  const onShowCalendar = () => setOpen(true);

  const onCloseCalendar = () => setOpen(false);

  const onSelectDate = (select: string | string[]) => {
    const value = dayjs(select as string).format(DATE_FORMAT.SHORT);
    onChange?.({ value });
    onCloseCalendar();
  };

  return (
    <DateInputWrapper ref={wrapRef}>
      <DateField type="date" value={value} onFocus={onShowCalendar} disabled />

      <DropButton disabled={disabled} onClick={onShowCalendar} icon={<FormCalendar />} />

      {showDropCalendar && (
        <Drop background="white" target={wrapRef.current} onClickOutside={onCloseCalendar} onEsc={onCloseCalendar}>
          <Calendar animate={false} date={value || DEF_DATE} onSelect={onSelectDate} locale="ru" />
        </Drop>
      )}
    </DateInputWrapper>
  );
};

export default DateInput;
