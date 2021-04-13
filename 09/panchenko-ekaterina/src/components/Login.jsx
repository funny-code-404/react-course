import { Forms, Input, Button } from "./styles";

const loginText = "Оставлять меня в системе";
const formType = "Login";

export const withLogin = () => ({ loginCheckbox, onLoginCheckboxChange }) => (
  <Forms>
    <h2>{formType}</h2>
    <Input
      onChange={(event) => onLoginCheckboxChange(event.target.checked)}
      type="checkbox"
      defaultChecked={loginCheckbox}
    />
    <p>{loginText}</p>
    <Button>{formType} in</Button>
  </Forms>
);
