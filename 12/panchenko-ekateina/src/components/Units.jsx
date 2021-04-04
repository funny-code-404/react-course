import { useSelector } from "react-redux";
import { getUnitsRequested } from "../ducks/units/actions";
import { Resource } from "./Resource";

export const Units = () => {
  const unitsUrl = useSelector((state) => state.resources.data?.units);
  const units = useSelector((state) => state.units?.data);

  return (
    <Resource
      url={unitsUrl}
      action={getUnitsRequested}
      data={units}
      type="unit"
    />
  );
};
