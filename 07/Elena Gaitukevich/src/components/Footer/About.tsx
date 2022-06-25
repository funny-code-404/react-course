import { StyledList, StyledListItem } from "./index";

export const About = () => {
  return (
    <StyledList>
      <h5 className="list__title">About</h5>
      <div className="active">
        <StyledListItem>How Triphouse works</StyledListItem>
        <StyledListItem>Careers</StyledListItem>
        <StyledListItem>Privacy</StyledListItem>
        <StyledListItem>Terms</StyledListItem>
      </div>
    </StyledList>
  );
};
