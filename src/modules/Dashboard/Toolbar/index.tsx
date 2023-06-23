import { Box, Grid, Text, TextInput } from 'grommet';
import { FormSearch } from 'grommet-icons';
import { ChangeEventHandler, useCallback } from 'react';
import styled from 'styled-components';
import SortButton from 'ui/Button/Sort';
import { TSortType } from 'utils/type';

interface IDashboardToolbarProps {
  value: string;
  count?: number;
  onChange: (value: string) => void;
  onSort: (value: TSortType) => void;
}

const SEARCH_PLACEHOLDER = 'Поиск по названию задачи';

const SearchInput = styled(TextInput)`
  flex-shrink: 1;
  max-width: 760px;
  width: 100%;
`;

const DashboardToolbar = ({ count, value, onChange, onSort }: IDashboardToolbarProps) => {
  const onSearch = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      event.preventDefault();
      onChange(event.target.value);
    },
    [onChange],
  );

  return (
    <Grid columns={['flex', 'auto']} align="center" fill="horizontal" gap="medium" margin={{ bottom: 'medium' }}>
      <Box direction="row" justify="between" fill="horizontal" gap="medium">
        <SearchInput icon={<FormSearch />} value={value} onChange={onSearch} placeholder={SEARCH_PLACEHOLDER} />

        <SortButton onToggle={onSort} />
      </Box>

      {Boolean(count) && <Text size="small">{`Всего: ${count} задач`}</Text>}
    </Grid>
  );
};

export default DashboardToolbar;
