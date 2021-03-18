import styled from "styled-components";
import { Todos } from "./components/Todos";
import { Item } from "./components/Item";
import { Posts } from "./components/Posts";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Spinner } from "./components/Spinner";

export const App = () => (
  <div className="App">
    <Spinner />
    <Router>
      <nav>
        <List>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </List>
      </nav>

      <Switch>
        <Route path="/todos/:id" component={Item} />
        <Route path="/todos" component={Todos} />
        <Route path="/posts/:id" component={Item} />
        <Route path="/posts" component={Posts} />
      </Switch>
    </Router>
  </div>
);

const List = styled.ul`
  display: flex;
  column-gap: 30px;
  list-style: none;

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 20px;
  }
`;
