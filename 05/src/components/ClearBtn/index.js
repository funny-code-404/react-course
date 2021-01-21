import { useDispatch } from "react-redux";
import { ACTION_CLEAR_VALUE } from "../../ducks/calculations";

export const ClearBtn = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(ACTION_CLEAR_VALUE());
  };
  return <button onClick={handleClick}>Clear</button>;
};

export default ClearBtn;
