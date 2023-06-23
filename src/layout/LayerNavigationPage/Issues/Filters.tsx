import { Form, FormField, Grid, Select } from 'grommet';
import { useCallback } from 'react';
import SearchInput from 'ui/form/Search';

const OPTION_ID = {
  ALL: 'all',
  FAVORITE: 'favorite',
} as const;

interface IOption {
  label: string;
  id: (typeof OPTION_ID)[keyof typeof OPTION_ID];
}

export interface ILayerPageIssueFilterValues {
  query: string;
  favorite?: boolean;
}

interface ILayerPageIssueFiltersProps {
  value: ILayerPageIssueFilterValues;
  onChange: (value: ILayerPageIssueFilterValues) => void;
}

const ID_TO_VALUE = {
  [OPTION_ID.ALL]: {},
  [OPTION_ID.FAVORITE]: {
    favorite: true,
  },
} as const;

const FILTER_OPTIONS = [
  {
    label: 'Все задачи',
    id: OPTION_ID.ALL,
  },
  {
    label: 'Избранные',
    id: OPTION_ID.FAVORITE,
  },
];

const LayerPageIssueFilters = (props: ILayerPageIssueFiltersProps) => {
  const { value, onChange } = props;

  const onSelectFilter = useCallback(
    (event: { value: IOption }) => {
      const { value: optionValue } = event;

      const selected = ID_TO_VALUE[optionValue.id];

      onChange?.({ ...value, ...selected });
    },
    [value, onChange],
  );

  return (
    <Form value={value} onChange={onChange}>
      <Grid columns={['minmax(0, 2fr)', 'minmax(0, 1fr)']} gap="medium" align="start">
        <SearchInput name="query" tip="Введите минимум 3 символа" />

        <FormField name="favorite">
          <Select
            defaultValue={OPTION_ID.ALL}
            options={FILTER_OPTIONS}
            valueKey="id"
            labelKey="label"
            onChange={onSelectFilter}
            dropProps={{
              margin: { top: 'small' },
              round: 'xsmall',
            }}
          />
        </FormField>
      </Grid>
    </Form>
  );
};

export default LayerPageIssueFilters;
