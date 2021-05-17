import { Container } from "./styles";

const Info = ({ title, body, userId }) => {
  return (
    <Container>
      <h3>{title}</h3>
      <p>{body}</p>
      <span>{userId}</span>
    </Container>
  );
};

export default Info;
