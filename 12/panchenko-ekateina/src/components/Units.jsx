import { useSelector } from "react-redux";
import { getUnitsRequested } from "../ducks/units/actions";
import { Resource } from "./Resource";
import background from "../img/ageOfEmpiresUnit.jpg";
import { Container, FullBack } from "./style";

export const Units = () => {
  const unitsUrl = useSelector((state) => state.resources.data?.units);
  const units = useSelector((state) => state.units?.data);

  return (
    <Container background={background}>
      <FullBack>
        <Resource
          url={unitsUrl}
          action={getUnitsRequested}
          data={units}
          type="unit"
        />
      </FullBack>
    </Container>
  );
};
