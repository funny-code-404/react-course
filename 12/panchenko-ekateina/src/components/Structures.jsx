import { useSelector } from "react-redux";
import { getStructuresRequested } from "../ducks/actions";
import { Resource } from "./Resource";

export const Structures = () => {
  const structuresUrl = useSelector(
    (state) => state.resources.data?.structures
  );
  const structures = useSelector((state) => state.structures?.data);

  return (
    <Resource
      url={structuresUrl}
      action={getStructuresRequested}
      data={structures}
      type="structure"
    />
  );
};
