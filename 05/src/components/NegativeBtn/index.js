import { useDispatch } from "react-redux";
import { ACTION_NEGATIVE } from "../../ducks/calculations";

export const NegativeBtn = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(ACTION_NEGATIVE());
  };
  return <button onClick={handleClick}>+/-</button>;
};

export default NegativeBtn;
