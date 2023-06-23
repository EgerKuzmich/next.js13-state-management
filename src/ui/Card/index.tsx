import EditIcon from 'assets/icons/edit';
import { Box, Button, Text } from 'grommet';
import styled from 'styled-components';

const Card = styled(Box).attrs({ gap: 'medium' })``;

const CardList = styled(Box).attrs({ as: 'ul' })`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0;
  padding: 0;
  width: 100%;
  list-style: none;
`;

const CardItem = styled.li``;

const CardTimeLabel = styled(Text).attrs({ as: 'time' })`
  color: var(--dark-3);
  font-size: 14px;

  :before {
    content: '·';
    padding-right: 12px;
  }
`;

const CardEditButton = styled(Button).attrs({ icon: <EditIcon />, size: 'xsmall' })`
  color: var(--brand);

  :hover,
  :focus {
    color: var(--dark-2);
  }
`;

export const UiCard = Object.assign(Card, {
  List: CardList,
  Item: CardItem,
  TimeLabel: CardTimeLabel,
  EditButton: CardEditButton,
});
