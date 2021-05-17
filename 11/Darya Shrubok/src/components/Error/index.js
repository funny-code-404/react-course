import { useSelector } from "react-redux";

const Error = (props) => {
  const todosError = useSelector((state) => state.todos.error);
  const postsError = useSelector((state) => state.posts.error);

  const {text} = props;

  return (
    <div className="error">
      {text}
    </div>
  );
};

export default Error;
