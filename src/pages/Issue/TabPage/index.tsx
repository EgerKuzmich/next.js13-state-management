import { Box } from 'grommet';
import { PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components';
import Tabs, { ITab } from 'ui/Tabs';

interface PageWrapperProps extends PropsWithChildren {
  tabs: ITab[];
  aside?: ReactNode;
}

const PageTabs = styled(Tabs)`
  height: 100%;
  width: 78%;
  flex-grow: 1;

  & > [role='tabpanel'] {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
  }
`;

const PageAside = styled(Box).attrs({ as: 'aside' })`
  width: 22%;
`;

const TabPageWrapper = ({ aside, tabs, children }: PageWrapperProps) => {
  return (
    <Box direction="row" align="start" fill pad={'medium'} gap="large">
      {Boolean(tabs?.length) && <PageTabs list={tabs} />}

      {Boolean(aside) && <PageAside>{aside}</PageAside>}
      {children}
    </Box>
  );
};

export default TabPageWrapper;
