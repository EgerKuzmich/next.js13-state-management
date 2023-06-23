// import { useQuery } from '@tanstack/react-query';
// import { useUpdateEffect } from 'react-use';
// import { useTimeSheetStore } from 'modules/TimeSheet/store';
// import { useIssueStore } from 'modules/Issue/store';
import useIssueSummary from './useIssueSummary';

import { Grid, Text } from 'grommet';

// import { IssueService } from 'modules/Issue/api';
import { IFullIssue } from 'modules/Issue/types';
import { ITimeSheet } from 'modules/TimeSheet/types';

import { mockIssue } from 'mock/issue';
import { mockTimeSheets } from 'mock/time-sheets';

interface IDescriptionItemProps {
  term: string;
  description: string | number;
}

interface IIssueSummaryProps {
  issue: IFullIssue;
  timeSheets: ITimeSheet[];
}

// const QUERY_KEY = 'timesheet';

// const issueService = new IssueService();

const SummaryItem = (props: IDescriptionItemProps) => {
  const { term, description } = props;

  return (
    <>
      <Text as={'dt'} size="small" weight="bold">
        {term}
      </Text>

      <Text as={'dd'} size="small" margin="none">
        {description}
      </Text>
    </>
  );
};

const SummaryList = ({ issue, timeSheets }: IIssueSummaryProps) => {
  const summary = useIssueSummary({ issue, timeSheets });

  if (!summary) {
    return null;
  }

  return (
    <Grid as="dl" columns={['flex', 'flex']} gap="small">
      {summary.map(({ term, description }) => (
        <SummaryItem key={term} term={term} description={description} />
      ))}
    </Grid>
  );
};

const IssueSummary = () => {
  // TODO: интегрировать после правок cors
  // const { current: issue } = useIssueStore();

  // const { data: timeSheets, isFetched } = useQuery([QUERY_KEY], () => issueService.getTimeSheets(issue?.id), {
  //   enabled: Boolean(issue?.id),
  // });

  // const { list: timeSheetList, add: addTimeSheetList } = useTimeSheetStore();

  // useUpdateEffect(() => {
  //   if (!isFetched || !timeSheets) {
  //     return;
  //   }

  //   addTimeSheetList(timeSheets.data);
  // }, [isFetched]);

  const issue = mockIssue;

  const timeSheetList = mockTimeSheets;

  if (!issue || !timeSheetList) {
    return null;
  }

  return <SummaryList issue={issue} timeSheets={timeSheetList} />;
};

export default IssueSummary;
