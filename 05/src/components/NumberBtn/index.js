import { useDispatch } from "react-redux";
import { ACTION_SET_VALUE } from "../../ducks/calculations";

export const NumberBtn = ({ value }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(ACTION_SET_VALUE(value));
  };

  return <button onClick={handleClick}>{value}</button>;
};
export default NumberBtn;
