import { useSelector } from "react-redux";
import { getCivilizationsRequested } from "../ducks/actions";
import { Resource } from "./Resource";

export const Civilizations = () => {
  const civilizationsUrl = useSelector(
    (state) => state.resources.data?.civilizations
  );
  const civilizations = useSelector((state) => state.civilizations?.data);

  return (
    <Resource
      url={civilizationsUrl}
      action={getCivilizationsRequested}
      data={civilizations}
      type="civilization"
    />
  );
};
