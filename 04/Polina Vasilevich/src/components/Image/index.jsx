import { Image } from "./styles";
import PropTypes from "prop-types";

const ImageComponent = ({ img }) => {
  return <Image img={img} />;
};

ImageComponent.propTypes = {
  img: PropTypes.string,
};

ImageComponent.defaultProps = {
  img: "",
};

export default ImageComponent;
