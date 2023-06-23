import { Box, TableBody, TableHeader, TableRow } from 'grommet';
import styled, { css } from 'styled-components';

const Table = styled(Box).attrs({ as: 'table' })`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1rem;
  width: 100%;
`;

const Header = styled(TableHeader)`
  display: contents;
`;

const Body = styled(TableBody)`
  display: contents;
`;

const Row = styled(TableRow)<{ header?: boolean }>`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 5fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 2fr) minmax(0, 2fr);
  gap: 1rem;
  width: 100%;
  min-height: 60px;
  padding: 12px 0;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px;
  transition: all 0.2s ease-in-out;

  :hover,
  :focus {
    transform: scale(1.02);
    transition: all var(--transition-med);
  }

  ${({ header }) =>
    header &&
    css`
      min-height: unset;
      border-radius: 0;
      box-shadow: none;
      background: inherit;

      :hover,
      :focus {
        transform: none;
        transition: none;
      }

      th {
        border: none;
      }
    `}
`;

export const UiTable = Object.assign(Table, {
  Header,
  Body,
  Row,
});
