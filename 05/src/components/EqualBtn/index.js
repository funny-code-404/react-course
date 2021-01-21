import { useDispatch } from "react-redux";
import { ACTION_MATH_RESULT } from "../../ducks/calculations";

export const EqualBtn = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(ACTION_MATH_RESULT());
  };
  return <button onClick={handleClick}>=</button>;
};

export default EqualBtn;
