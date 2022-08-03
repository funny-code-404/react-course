import React, { memo } from "react";
import Select from "react-select";

const selectAgeQuestion =
  "What is the age of the child you’re travelling with?";

const childrenAge = [
  { value: "0 years old", label: "0 years old" },
  { value: "1 years old", label: "1 years old" },
  { value: "2 years old", label: "2 years old" },
  { value: "3 years old", label: "3 years old" },
  { value: "4 years old", label: "4 years old" },
  { value: "5 years old", label: "5 years old" },
  { value: "6 years old", label: "6 years old" },
  { value: "7 years old", label: "7 years old" },
  { value: "8 years old", label: "8 years old" },
  { value: "9 years old", label: "9 years old" },
  { value: "10 years old", label: "10 years old" },
  { value: "11 years old", label: "11 years old" },
  { value: "12 years old", label: "12 years old" },
  { value: "13 years old", label: "13 years old" },
  { value: "14 years old", label: "14 years old" },
  { value: "15 years old", label: "15 years old" },
  { value: "16 years old", label: "16 years old" },
  { value: "17 years old", label: "17 years old" },
];

const SelectChidrenAge = memo(() => {
  return (
    <div className="selectAge_container">
      <p className="selectAge_title">{selectAgeQuestion}</p>
      <Select 
      className="selectAge_block"
      options={childrenAge}
      placeholder="Child age" />
    </div>
  );
});

export default SelectChidrenAge;
