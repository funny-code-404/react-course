import { useSelector } from "react-redux";
import { getStructuresRequested } from "../ducks/actions";
import { Resource } from "./Resource";
import { Container, FullBack } from "./style";
import background from "../img/ageOfEmpires.jpg";

export const Structures = () => {
  const structuresUrl = useSelector(
    (state) => state.resources.data?.structures
  );
  const structures = useSelector((state) => state.structures?.data);

  return (
    <Container background={background}>
      <FullBack>
        <Resource
          url={structuresUrl}
          action={getStructuresRequested}
          data={structures}
          type="structure"
        />
      </FullBack>
    </Container>
  );
};
