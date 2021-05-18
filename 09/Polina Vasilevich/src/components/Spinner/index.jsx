import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import { Container } from "./styles.js";

const Spinner = () => {
  const isPostsFetching = useSelector((state) => state.posts.isFetching);
  const isTodosFetching = useSelector((state) => state.todos.isFetching);
  const isPostDetailsFetching = useSelector(
    (state) => state.postDetails.isFetching
  );

  const isTodoDetailsFetching = useSelector(
    (state) => state.todoDetails.isFetching
  );

  const isLoading =
    isPostsFetching ||
    isTodosFetching ||
    isPostDetailsFetching ||
    isTodoDetailsFetching;

  return (
    <Container>
      <Loader
        visible={isLoading}
        type="TailSpin"
        color="#ff8a00"
        height={100}
        width={100}
      />
    </Container>
  );
};

export default Spinner;
