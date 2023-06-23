import { Button } from 'grommet';
import { Ascend, Descend } from 'grommet-icons';
import { useState } from 'react';
import { SORT_TYPE } from 'utils/constants';
import { TSortType } from 'utils/type';

interface ISortButtonProps {
  renderLabel?: (value: TSortType) => string;
  onToggle?: (value: TSortType) => void;
}

const ValueToElement = {
  [SORT_TYPE.ASCENDING]: {
    swap: SORT_TYPE.DESCENDING,
    icon: Ascend,
  },
  [SORT_TYPE.DESCENDING]: {
    swap: SORT_TYPE.ASCENDING,
    icon: Descend,
  },
};

const SortButton = ({ onToggle, renderLabel }: ISortButtonProps) => {
  const [value, setValue] = useState<TSortType>(SORT_TYPE.DESCENDING);

  const { icon: Icon, swap } = ValueToElement[value];

  const onClick = () => {
    setValue(swap);
    onToggle?.(swap);
  };

  return (
    <Button plain={false} onClick={onClick} icon={<Icon size="20px" />} label={renderLabel?.(value)} size="xsmall" />
  );
};

export default SortButton;
