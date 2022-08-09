import styled from "styled-components";
import { memo } from "react";
import Select from "react-select";
import { LightTheme } from "../../../../styles/styled-components/LightTheme";
import { getFont } from "../../../../styles/styled-components/mixins";

const askText = "What is the age of the child you’re travelling with?";

const options: any = [
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
export const ChildrenAge = memo(() => {
  return (
    <ChildrenBlock>
      <ChildrenAskText>{askText}</ChildrenAskText>
      <Select
        defaultValue={""}
        isMulti
        name="Children age"
        options={options}
        className="basic-multi-select my"
        placeholder="Your child age..."
        styles={colourStyles}
      />
    </ChildrenBlock>
  );
});

export const ChildrenAskText = styled.p`
  width: 228px;
  margin: 26px 0 12px 0;
  ${getFont("xxxs", "regular", "xxxs")};
  color: ${LightTheme.colors.mainText};
`;

export const ChildrenBlock = styled.div``;

const colourStyles = {
  control: (styles: any) => ({
    ...styles,
    border: "1px solid #3077C6",
    borderRadius: "0",
    fontSize: "12px",
  }),
  option: (styles: any, { isDisabled }: any) => {
    return {
      ...styles,
      fontSize: "12px",
    };
  },
};
