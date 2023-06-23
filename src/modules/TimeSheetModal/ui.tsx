import { FormField, Layer } from 'grommet';
import styled from 'styled-components';

const TimeSheetModal = styled(Layer).attrs({
  modal: true,
  animation: 'fadeIn',
})`
  min-height: 435px;
  width: 680px;
`;

const TimeSheetFieldDuration = styled(FormField).attrs({ required: true })`
  grid-area: duration;
`;

const TimeSheetFieldDate = styled(FormField).attrs({ required: true })`
  grid-area: date;
`;

const TimeSheetFieldTime = styled(FormField).attrs({ required: true })`
  grid-area: time;
`;

const TimeSheetFieldComment = styled(FormField)`
  grid-area: comment;
`;

export const UiTimeSheetModal = Object.assign(TimeSheetModal, {
  FieldDuration: TimeSheetFieldDuration,
  FieldDate: TimeSheetFieldDate,
  FieldTime: TimeSheetFieldTime,
  FieldComment: TimeSheetFieldComment,
});
