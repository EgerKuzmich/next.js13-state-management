import StarIcon, { StarIconActive } from 'assets/icons/star';
import { Button } from 'grommet';
import { useCallback, useState } from 'react';

interface IFavoriteButtonProps {
  active: boolean;
  onClick?: (value: boolean) => void;
}

const ControlledFavoriteButton = ({ active, onClick }: IFavoriteButtonProps) => {
  const icon = active ? <StarIconActive /> : <StarIcon />;
  const clickHandler = () => {
    const newActive = !active;
    onClick?.(newActive);
  };

  return <Button icon={icon} onClick={clickHandler} />;
};

const FavoriteButton = (props: IFavoriteButtonProps) => {
  const { active: defaultActive = false, onClick } = props;

  const [active, setActive] = useState(defaultActive);

  const clickHandler = useCallback(
    (value: boolean) => {
      setActive(value);
      onClick?.(value);
    },
    [onClick],
  );

  return <ControlledFavoriteButton active={active} onClick={clickHandler} />;
};

export default FavoriteButton;
