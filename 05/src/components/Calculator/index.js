import ResultField from "../ResultField";
import NumberBtn from "../NumberBtn";
import BackForwardBtn from "../BackForwardBtn";
import ClearBtn from "../ClearBtn";
import EqualBtn from "../EqualBtn";
import NegativeBtn from "../NegativeBtn";
import MathFunctionBtn from "../MathFunctionBtn";

import "./style.scss";

export const Calculator = () => (
  <div className="calculator">
    <div className="main__div">
      <h1>Calculator</h1>
      <ResultField />
    </div>
    <div className="nam-pad__div">
      <ClearBtn />
      <BackForwardBtn />
      <NegativeBtn />
      <MathFunctionBtn value="/" />
      <NumberBtn value={7} />
      <NumberBtn value={8} />
      <NumberBtn value={9} />
      <MathFunctionBtn value="*" />
      <NumberBtn value={4} />
      <NumberBtn value={5} />
      <NumberBtn value={6} />
      <MathFunctionBtn value="-" />
      <NumberBtn value={1} />
      <NumberBtn value={2} />
      <NumberBtn value={3} />
      <MathFunctionBtn value="+" />
      <div className="zero__btn">
        <NumberBtn value={0} />
      </div>
      <NumberBtn value="." />
      <EqualBtn />
    </div>
  </div>
);

export default Calculator;
