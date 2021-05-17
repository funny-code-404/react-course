import { Link } from "react-router-dom";
import { List, ListItem } from "./styles";

const Header = () => {
  return (
    <header>
      <nav>
        <List>
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link to="/todos">Todos</Link>
          </ListItem>
          <ListItem>
            <Link to="/posts">Posts</Link>
          </ListItem>
        </List>
      </nav>
    </header>
  );
};

export default Header;
