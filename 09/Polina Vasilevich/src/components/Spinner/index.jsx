import { useSelector } from "react-redux";

const Spinner = () => {
  const isPostsFetching = useSelector((state) => state.posts.isFetching);
  const isTodosFetching = useSelector((state) => state.todos.isFetching);
  const isPostDetailsFetching = useSelector(
    (state) => state.postDetails.isFetching
  );
  const isLoading = isPostsFetching || isTodosFetching || isPostDetailsFetching;

  return (
    <p style={{ display: isLoading ? "block" : "none" }}>L O A D I N G...</p>
  );
};

export default Spinner;
