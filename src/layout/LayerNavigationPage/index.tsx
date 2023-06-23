import LayerIssuePage from './Issues';
import { Box } from 'grommet';
import { TRoute } from 'utils/type';
import { NAV_PAGE } from './constants';

interface NavigationPageProps {
  page: TRoute;
}

const RouteToPage = {
  [NAV_PAGE.ISSUES]: LayerIssuePage,
};

const LayerNavigationPage = ({ page }: NavigationPageProps) => {
  const Page = RouteToPage[page];

  return (
    <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
      <Page />
    </Box>
  );
};

LayerNavigationPage.displayName = 'SidebarPage';

export default LayerNavigationPage;
