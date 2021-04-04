import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import background from "../img/ageOfEmpires.jpg";
import {
  Container,
  Title,
  Form,
  Label,
  Button,
  Input,
  LinkLogin,
} from "./style";

export const SignUp = () => {
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = event.target.elements;

    try {
      await auth.createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Container background={background} isAuth>
      <Title>SignUp</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          Email
          <Input name="email" type="email" placeholder="email" />
        </Label>
        <Label>
          Password
          <Input name="password" type="password" placeholder="password" />
        </Label>
        <Button type="submit">SignUp</Button>
      </Form>
      <LinkLogin to="/login">Login</LinkLogin>
    </Container>
  );
};
