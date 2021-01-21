import { useDispatch } from "react-redux";
import { ACTION_SET_TYPEOF_FUNCTION } from "../../ducks/calculations";

export const MathFunctionBtn = ({ value }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(ACTION_SET_TYPEOF_FUNCTION(value));
  };

  return <button onClick={handleClick}>{value}</button>;
};

export default MathFunctionBtn;
