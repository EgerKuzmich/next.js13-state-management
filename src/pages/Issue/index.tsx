import TabPageWrapper from 'pages/Issue/TabPage';
import { Box } from 'grommet';
import { useLayoutContext } from 'layout/LayoutProvider';
import { LAYOUT_TITLE } from 'layout/constants';
import { mockTimeSheets } from 'mock/time-sheets';
import { mockIssue } from 'mock/issue';
import IssueDescription from 'modules/Issue/Description';
import TimeSheet from 'modules/TimeSheet';
import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ITimeSheet } from 'modules/TimeSheet/types';
import EllipsisLoader from 'ui/EllipsisLoader';
import IssuePageAside from './Aside';
import { useMount, useUpdateEffect } from 'react-use';
import { useTimeSheetStore } from 'modules/TimeSheet/store';
import IssueComments from 'modules/Comments';

const QUERY_KEY = 'time-sheets';

const getMockTimeSheets = () =>
  new Promise<ITimeSheet[]>((resolve) => {
    setTimeout(() => resolve(mockTimeSheets), 1000);
  });

const IssuePage = () => {
  const { onSetTitle } = useLayoutContext();

  const { isLoading, isFetched, data } = useQuery([QUERY_KEY], getMockTimeSheets);

  const { add } = useTimeSheetStore();

  const tabs = useMemo(() => {
    const { createdAt, summary, description } = mockIssue;

    return [
      {
        id: 1,
        title: 'Описание',
        content: <IssueDescription createdAt={createdAt} description={description} summary={summary} />,
      },
      {
        id: 2,
        title: 'Комментарии',
        content: <IssueComments />,
      },
      {
        id: 3,
        title: 'Трудозатраты',
        content: <TimeSheet />,
      },
    ];
  }, []);

  useMount(() => {
    onSetTitle(LAYOUT_TITLE.ISSUES);
  });

  useUpdateEffect(() => {
    if (isFetched && data) {
      add(data);
    }
  }, [isFetched]);

  if (isLoading) {
    return (
      <Box fill align="center" justify="center">
        <EllipsisLoader />
      </Box>
    );
  }

  return <TabPageWrapper tabs={tabs} aside={<IssuePageAside />} />;
};

export default IssuePage;
