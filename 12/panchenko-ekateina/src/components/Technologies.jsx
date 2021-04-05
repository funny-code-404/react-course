import { useSelector } from "react-redux";
import { getTechnologiesRequested } from "../ducks/actions";
import { Resource } from "./Resource";

export const Technologies = () => {
  const technologiesUrl = useSelector(
    (state) => state.resources.data?.technologies
  );
  const technologies = useSelector((state) => state.technologies?.data);

  return (
    <Resource
      url={technologiesUrl}
      action={getTechnologiesRequested}
      data={technologies}
      type="technology"
    />
  );
};
