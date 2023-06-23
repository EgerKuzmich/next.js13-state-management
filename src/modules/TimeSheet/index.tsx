import { Box } from 'grommet';
import TimeSheetItem from './Item';
import SortButton from 'ui/Button/Sort';
import { useTimeSheetStore } from './store';
import { ITimeSheet } from './types';
import { useMemo } from 'react';
import { UiCard } from 'ui/Card';

const TimeSheetBody = ({ list }: { list: ITimeSheet[] }) => {
  return (
    <UiCard.List>
      {list.map((item) => (
        <TimeSheetItem key={item.issue.id} {...item} />
      ))}
    </UiCard.List>
  );
};

const TimeSheet = () => {
  const store = useTimeSheetStore();
  const { sort, sortList, setSort } = store;

  const list = useMemo(
    () => sortList(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sort, sortList],
  );

  return (
    <Box gap="medium" pad={{ top: 'medium', bottom: 'medium' }}>
      <Box align="end">
        <SortButton onToggle={setSort} />
      </Box>

      <TimeSheetBody list={list} />
    </Box>
  );
};

export default TimeSheet;
