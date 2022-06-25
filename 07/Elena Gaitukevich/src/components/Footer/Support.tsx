import { StyledList, StyledListItem } from "./index";

export const Support = () => {
  return (
    <StyledList>
      <h5 className="list__title">Support</h5>
      <div className="active">
        <StyledListItem>Contact Customer Service</StyledListItem>
        <StyledListItem>FAQ</StyledListItem>
      </div>
    </StyledList>
  );
};
