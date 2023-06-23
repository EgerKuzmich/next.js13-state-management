import dayjs from 'dayjs';
import { IFullIssue } from 'modules/Issue/types';
import { ITimeSheet } from 'modules/TimeSheet/types';
import { useMemo } from 'react';

interface ISummaryItem {
  term: string;
  description: string | number;
}

const useIssueSummary = (params: { issue: IFullIssue; timeSheets: ITimeSheet[] }): ISummaryItem[] => {
  const { issue, timeSheets } = params;

  const duration = useMemo(() => {
    const fullDuration = timeSheets.reduce((acc, timeSheet) => {
      const { duration } = timeSheet;

      return acc.add(dayjs.duration(duration));
    }, dayjs.duration(0));

    return fullDuration.humanize();
  }, [timeSheets]);

  return useMemo(() => {
    const { status, type, priority, assignee, followers, version } = issue;

    return [
      {
        term: 'Статус',
        description: status.display,
      },
      {
        term: 'Тип',
        description: type.display,
      },
      {
        term: 'Версия',
        description: version,
      },
      {
        term: 'Приоритет',
        description: priority.display,
      },
      {
        term: 'Исполнитель',
        description: assignee.display,
      },
      {
        term: 'Наблюдатели',
        description: followers.map((follower) => follower.display).join(', '),
      },
      {
        term: 'Затрачено времени',
        description: duration,
      },
    ];
  }, [issue, duration]);
};

export default useIssueSummary;
