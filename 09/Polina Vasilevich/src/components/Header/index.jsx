import { NavLink } from "react-router-dom";
import { List, ListItem } from "./styles";

const headers = [
  {
    path: "/todos",
    label: "Todos",
  },
  {
    path: "/posts",
    label: "Posts",
  },
];

const Header = () => {
  return (
    <header>
      <nav>
        <List>
          {headers.map(({ path, label }) => (
            <ListItem key={path}>
              <NavLink to={path} exact>
                {label}
              </NavLink>
            </ListItem>
          ))}
        </List>
      </nav>
    </header>
  );
};

export default Header;
