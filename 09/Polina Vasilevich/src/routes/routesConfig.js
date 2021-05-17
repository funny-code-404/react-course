import TodosPage from "../containers/TodosPage";
import PostsPage from "../containers/PostsPage";
import InfoPostPage from "../containers/InfoPostPage";
import InfoTodoPage from "../containers/InfoTodoPage";
const routesConfig = [
  {
    path: "/",
    exact: true,
  },

  {
    path: "/todos",
    exact: true,
    component: TodosPage,
  },

  {
    path: "/todos/:id",
    component: InfoTodoPage,
  },

  {
    path: "/posts",
    exact: true,
    component: PostsPage,
  },

  {
    path: "/posts/:id",
    component: InfoPostPage,
  },
];

export default routesConfig;
