import TodosPage from "@components/TodosPage";
import PostsPage from "@components/PostsPage";
import InfoPostPage from "@components/InfoPostPage";
import InfoTodoPage from "@components/InfoTodoPage";
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
