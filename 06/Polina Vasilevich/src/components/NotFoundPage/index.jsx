import { Error, ErrorTitle, ErrorText } from "./styles";

const NotFoundPage = () => {
  return (
    <Error>
      <ErrorTitle>404</ErrorTitle>
      <ErrorText>Page not found!</ErrorText>
    </Error>
  );
};

export default NotFoundPage;
