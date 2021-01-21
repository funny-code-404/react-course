import { useDispatch } from "react-redux";
import { ACTION_BACK_FORWARD } from "../../ducks/calculations";

export const BackForwardBtn = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(ACTION_BACK_FORWARD());
  };
  return <button onClick={handleClick}>back</button>;
};

export default BackForwardBtn;
