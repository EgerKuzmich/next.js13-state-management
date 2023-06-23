import UserIcon from '../../assets/icons/user';
import LayoutSidebarContent from './Content';
import { UiSidebar } from './ui';

const LayoutSidebarDesktop = () => {
  return (
    <UiSidebar header={<UserIcon />} gridArea="sidebar" elevation="xlarge" border="right" background="dark-3">
      <LayoutSidebarContent />
    </UiSidebar>
  );
};

const LayoutSidebar = Object.assign(LayoutSidebarDesktop, {});

export default LayoutSidebar;
