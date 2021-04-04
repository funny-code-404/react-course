import { useSelector } from "react-redux";
import { getTechnologiesRequested } from "../ducks/actions";
import { Resource } from "./Resource";
import background from "../img/technologies.jpg";
import { Container, FullBack } from "./style";

export const Technologies = () => {
  const technologiesUrl = useSelector(
    (state) => state.resources.data?.technologies
  );
  const technologies = useSelector((state) => state.technologies?.data);

  return (
    <Container background={background}>
      <FullBack>
        <Resource
          url={technologiesUrl}
          action={getTechnologiesRequested}
          data={technologies}
          type="technology"
        />
      </FullBack>
    </Container>
  );
};
