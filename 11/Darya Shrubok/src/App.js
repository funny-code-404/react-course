import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Todos from "./components/Todos";
import TodosItem from "./components/TodosItem";
import Posts from "./components/Posts";
import PostsItem from "./components/PostsItem";
import Spinner from "./components/Spinner";

import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <Spinner />
      <Router>
          <Switch>
            <Route path="/todos" exact component={Todos} />
            <Route path="/todos/:id" exact component={TodosItem} />
            <Route path="/posts" exact component={Posts} />
            <Route path="/posts/:id" exact component={PostsItem} />
          </Switch>
        </Router>
    </Provider>
  );
}

export default App;
