import { StyledList, StyledListItem } from "./index";
import { config } from "./config";

export const About = () => {
  return (
    <StyledList>
      <h5 className="list__title">{config.about.title}</h5>
      <div className="active">
        {config.about.data.map((item) => (
          <StyledListItem key={item}>{item}</StyledListItem>
        ))}
      </div>
    </StyledList>
  );
};
