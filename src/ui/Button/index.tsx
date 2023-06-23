import StarIcon, { StarIconActive } from "@/src/assets/icons/star";
import { useCallback, useState } from "react";

interface IFavoriteButtonProps {
  active: boolean;
  className?: string;
  onClick?: (value: boolean) => void;
}

export const ControlledFavoriteButton = ({
  active,
  className,
  onClick,
}: IFavoriteButtonProps) => {
  const icon = active ? <StarIconActive /> : <StarIcon />;

  const clickHandler = () => {
    const newActive = !active;
    onClick?.(newActive);
  };

  return (
    <button
      className={`btn btn-circle ${className ?? ""}`}
      onClick={clickHandler}
    >
      {icon}
    </button>
  );
};

const FavoriteButton = (props: IFavoriteButtonProps) => {
  const { active: defaultActive = false, onClick } = props;

  const [active, setActive] = useState(defaultActive);

  const clickHandler = useCallback(
    (value: boolean) => {
      setActive(value);
      onClick?.(value);
    },
    [onClick]
  );

  return <ControlledFavoriteButton active={active} onClick={clickHandler} />;
};

export default FavoriteButton;
