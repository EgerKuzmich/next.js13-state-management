import { Button, Layer, Sidebar as SidebarBase } from 'grommet';
import { AnimationType } from 'grommet/utils';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const BASE_ANIMATIONS: AnimationType = [
  { type: 'fadeIn', duration: 300 },
  { type: 'slideRight', size: 'xlarge', duration: 250 },
];

const Sidebar = styled(SidebarBase).attrs({
  animation: BASE_ANIMATIONS,
})`
  width: 250px;
  background: var(--dark-3)
    linear-gradient(
      154deg,
      var(--bg-brand) calc(var(--gradient-height) * 0.33),
      transparent calc(var(--gradient-height) * 0.88)
    );
`;

const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const SidebarList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1;
  padding: 0;
  width: 100%;
  list-style: none;
`;

const SidebarListItem = styled.li`
  width: 100%;
`;

const SidebarButton = styled(Button).attrs({ as: Link })<{ to: string; $active: boolean }>`
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 100%;
  color: inherit;
  text-decoration: none;

  ${({ $active }) =>
    $active &&
    css`
      color: var(--active);
    `}
`;

const SidebarButtonIcon = styled.span`
  align-self: center;
  justify-self: center;
`;

const SidebarSlideOver = styled(Layer).attrs({
  animation: 'slide',
})`
  position: absolute;
  top: 0;
  left: 250px;
  width: 590px;
`;

export const UiSidebar = Object.assign(Sidebar, {
  Nav: SidebarNav,
  List: Object.assign(SidebarList, {
    Item: SidebarListItem,
  }),
  SlideOver: SidebarSlideOver,
  Button: Object.assign(SidebarButton, {
    Icon: SidebarButtonIcon,
  }),
});
