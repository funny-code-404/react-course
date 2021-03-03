import { Forms, Input, Button } from "./styles";

const checkInText = "Registration";
const formType = "Check In";

export const withCheckIn = () => ({
  checkinCheckbox,
  surname,
  date,
  phone,
  onCheckinCheckboxChange,
  onSurnameChange,
  onDateChange,
  onPhoneChange,
}) => (
  <Forms>
    <h2>{formType}</h2>
    <Input
      type="checkbox"
      defaultChecked={checkinCheckbox}
      onChange={(event) => onCheckinCheckboxChange(event.target.checked)}
    />
    <Input
      type="text"
      placeholder="Surname"
      value={surname}
      onChange={(event) => onSurnameChange(event.target.value)}
    />
    <Input
      type="text"
      placeholder="year of birth"
      value={date}
      onChange={(event) => onDateChange(event.target.value)}
    />
    <Input
      type="tel"
      placeholder="telephone"
      value={phone}
      onChange={(event) => onPhoneChange(event.target.value)}
    />
    <Button>{checkInText}</Button>
  </Forms>
);
