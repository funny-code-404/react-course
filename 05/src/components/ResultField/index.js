import { useSelector } from "react-redux";

import "./style.scss";

export const ResultField = () => {
  const results = useSelector((state) => state.calc);
  const { value, storedValue, typeOfFunction } = results;
  console.log(results);

  return (
    <div className="result__div">
      <h2>{!value.length && !storedValue ? "0" : value || storedValue}</h2>
      <p>
        {!storedValue
          ? "Enter numbers"
          : `${storedValue} ${typeOfFunction} ${value}`}
      </p>
    </div>
  );
};

export default ResultField;
