import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Container, List, ListItem } from "./styles";
import capitalizeFirstLetter from "@utils/capitalizeFirstLetter";

const ListComponent = ({ data, path }) => {
  return (
    <Container>
      <List>
        {data.map((item) => (
          <ListItem key={item.id}>
            <h3>
              <Link to={path + item.id}>
                {capitalizeFirstLetter(item.title)}
              </Link>
            </h3>
            {item.body && <p>{capitalizeFirstLetter(item.body)}</p>}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

ListComponent.propTypes = {
  data: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
};

ListComponent.defaultProps = {
  data: [],
  path: "",
};

export default ListComponent;
