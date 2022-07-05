import { memo } from "react";
import { StyledList, StyledListItem } from "./index";
import { config } from "./config";

export const Property = memo(() => {
  return (
    <StyledList>
      <h5 className="list__title">{config.property.title}</h5>
      <div className="active">
        {config.property.data.map((item) => (
          <StyledListItem key={item}>{item}</StyledListItem>
        ))}
      </div>
    </StyledList>
  );
});
