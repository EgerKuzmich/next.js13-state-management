import { Box } from 'grommet';
import styled from 'styled-components';

const SidebarPage = styled(Box)``;

const PageList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1;
  padding: 0;
  width: 100%;
  list-style: none;
`;

const PageListItem = styled.li`
  width: 100%;
`;

export const UiSidebarPage = Object.assign(SidebarPage, {
  List: Object.assign(PageList, {
    Item: PageListItem,
  }),
});
