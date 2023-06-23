import { useQuery } from '@tanstack/react-query';
import { useLayoutContext } from 'layout/LayoutProvider';
import { useIssueStore } from 'modules/Issue/store';
import { useMount, useUpdateEffect } from 'react-use';

import { Box } from 'grommet';
import { LAYOUT_TITLE } from 'layout/constants';
import DashboardTable from 'modules/Dashboard/Table';

import EllipsisLoader from 'ui/EllipsisLoader';
import DashboardToolbar from 'modules/Dashboard/Toolbar';
import { useIssueQueryParams } from 'modules/Issue/store/query-params';
import { IssueService } from 'modules/Issue/api';

const issueService = new IssueService();

const QUERY_KEY = 'issues';

const MainPage = () => {
  const { onSetTitle } = useLayoutContext();

  const { add, query, list, setQuery, setSort } = useIssueStore();

  const { filter } = useIssueQueryParams();

  const { data, isLoading } = useQuery([QUERY_KEY, query], () => issueService.search({ filter }));

  useMount(() => {
    onSetTitle(LAYOUT_TITLE.MAIN);
  });

  useUpdateEffect(() => {
    if (data) {
      add(data);
    }
  }, [data]);

  if (isLoading) {
    return (
      <Box fill pad="medium" align="center" justify="center">
        <EllipsisLoader />
      </Box>
    );
  }

  return (
    <Box fill pad="medium">
      <DashboardToolbar count={list?.length} value={query} onChange={setQuery} onSort={setSort} />
      <DashboardTable list={list} />
    </Box>
  );
};

export default MainPage;
