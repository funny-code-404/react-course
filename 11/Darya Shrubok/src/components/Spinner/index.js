import { useSelector } from "react-redux";

const Spinner = () => {
  const isTodosFetching = useSelector((state) => state.todos.isFetching);
  const isPostsFetching = useSelector((state) => state.posts.isFetching);

  const isLoading = isTodosFetching || isPostsFetching;

  return (
    isLoading && <div className="loading">
      LOADING...
    </div>
  );
};

export default Spinner;
