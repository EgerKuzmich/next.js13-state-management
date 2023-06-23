import { PropsWithChildren } from 'react';
import { UiSidebar } from './ui';

const SidebarSlideOver = ({ children }: PropsWithChildren) => {
  return (
    <UiSidebar.SlideOver position="left" full="vertical" modal={false} background="dark-3">
      {children}
    </UiSidebar.SlideOver>
  );
};

export default SidebarSlideOver;
