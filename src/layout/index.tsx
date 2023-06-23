import { PropsWithChildren } from 'react';
import LayoutSidebar from './Sidebar';
import { Grid, Header, Main, Text } from 'grommet';
import { useLayoutContext } from './LayoutProvider';

const MainLayout = ({ children }: PropsWithChildren) => {
  const { title } = useLayoutContext();

  return (
    <Grid
      fill
      rows={['auto', 'flex']}
      columns={['auto', 'flex', 'auto']}
      areas={[
        { name: 'header', start: [1, 0], end: [2, 0] },
        { name: 'sidebar', start: [0, 0], end: [0, 1] },
        { name: 'main', start: [1, 1], end: [1, 1] },
      ]}
    >
      <Header
        gridArea="header"
        direction="row"
        align="center"
        justify="between"
        pad={{ horizontal: 'medium', vertical: 'small' }}
        background="dark-2"
      >
        <Text as="h1" size="medium" margin="none">
          {title}
        </Text>
      </Header>

      <LayoutSidebar />

      <Main align="start" gridArea="main" justify="start">
        {children}
      </Main>
    </Grid>
  );
};

export default MainLayout;
