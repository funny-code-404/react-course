import styled from "styled-components";
import { Todos } from "./components/Todos";
import { TodoItem } from "./components/TodoItem";
import { Posts } from "./components/Posts";
import { PostItem } from "./components/PostItem";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Spinner } from "./components/Spinner";

export const App = () => (
  <div className="App">
    <Spinner />
    <Router>
      <div>
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
          <Route path="/todos/:id" component={TodoItem} />
          <Route path="/todos" component={Todos} />
          <Route path="/posts/:id" component={PostItem} />
          <Route path="/posts" component={Posts} />
        </Switch>
      </div>
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
