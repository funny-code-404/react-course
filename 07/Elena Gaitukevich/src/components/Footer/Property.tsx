import { StyledList, StyledListItem } from "./index";

export const Property = () => {
  return (
    <StyledList>
      <h5 className="list__title">Property types</h5>
      <div className="active">
        <StyledListItem>Guest houses</StyledListItem>
        <StyledListItem>Hotels</StyledListItem>
        <StyledListItem>Apartments</StyledListItem>
        <StyledListItem>Villas</StyledListItem>
        <StyledListItem>Holiday homes</StyledListItem>
        <StyledListItem>Hostels</StyledListItem>
      </div>
    </StyledList>
  );
};
