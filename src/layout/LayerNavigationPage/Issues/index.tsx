import { Box } from 'grommet';
import IssuePageContent from './Content';
import { mockIssueList } from 'mock/issues';
import LayerPageIssueFilters, { ILayerPageIssueFilterValues } from './Filters';
// import { IssueService } from 'modules/Issue/api';
import { useQuery } from '@tanstack/react-query';
import { IFullIssue } from 'modules/Issue/types';
import Skeleton from 'ui/Skeleton';
import { useState } from 'react';

const DEF_FILTERS = {
  query: '',
};

/* TODO: Заменить на id пользователя */
// const DEF_ASSIGNEE = '1130000062836728';

// const DEF_SEARCH_PARAMS = {
//   filter: {
//     assignee: DEF_ASSIGNEE,
//   },
// };

const QUERY_KEY = 'tasks';

// const issueService = new IssueService();
// const searchIssues = () => issueService.search(DEF_SEARCH_PARAMS);
const searchIssues = () => new Promise<IFullIssue[]>((resolve) => setTimeout(() => resolve(mockIssueList), 1000));

const LayerIssuePage = () => {
  const [filters, setFilters] = useState<ILayerPageIssueFilterValues>(DEF_FILTERS);

  /* TODO:Интегрировать после правок cors  */
  const { isLoading, data: list } = useQuery([QUERY_KEY], searchIssues);
  // const _queryParams = useIssueQueryParams()
  // const _count = useQuery([QUERY_KEY], getCount);

  return (
    <Box gap="medium">
      <LayerPageIssueFilters value={filters} onChange={setFilters} />

      {isLoading ? <Skeleton round="xsmall" height="108px" /> : <IssuePageContent data={list} />}
    </Box>
  );
};

export default LayerIssuePage;
