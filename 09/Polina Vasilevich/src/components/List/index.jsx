import { Link } from "react-router-dom";
import { Container, List, ListItem } from "./styles";

const ListComponent = ({ data, path }) => {
  return (
    <Container>
      <List>
        {data.map((item) => (
          <ListItem key={item.id}>
            <h3>
              <Link to={path + item.id}>{item.title}</Link>
            </h3>
            {item.body && <p>{item.body}</p>}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ListComponent;
