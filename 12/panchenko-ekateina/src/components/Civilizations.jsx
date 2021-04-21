import { useSelector } from "react-redux";
import { getCivilizationsRequested } from "../ducks/actions";
import { Resource } from "./Resource";
import background from "../img/ageOfEmpirescivilization.jpg";
import { Container, FullBack } from "./style";

export const Civilizations = () => {
  const civilizationsUrl = useSelector(
    (state) => state.resources.data?.civilizations
  );
  const civilizations = useSelector((state) => state.civilizations?.data);

  return (
    <Container background={background}>
      <FullBack>
        <Resource
          url={civilizationsUrl}
          action={getCivilizationsRequested}
          data={civilizations}
          type="civilization"
        />
      </FullBack>
    </Container>
  );
};
