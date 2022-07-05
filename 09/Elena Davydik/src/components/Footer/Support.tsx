import { memo } from "react";
import { StyledList, StyledListItem } from "./index";
import { config } from "./config";

export const Support = memo(() => {
  return (
    <StyledList>
      <h5 className="list__title">{config.support.title}</h5>
      <div className="active">
        {config.support.data.map((item) => (
          <StyledListItem key={item}>{item}</StyledListItem>
        ))}
      </div>
    </StyledList>
  );
});
