import { useContext } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { AuthContext } from "../context/Auth.context";
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

export const LogIn = () => {
  const history = useHistory();
  const { currentUser } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = event.target.elements;

    try {
      await auth.signInWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  return currentUser ? (
    <Redirect to={{ pathname: "/" }} />
  ) : (
    <Container background={background} isAuth>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          Email
          <Input name="email" type="email" placeholder="email" />
        </Label>
        <Label>
          Password
          <Input name="password" type="password" placeholder="password" />
        </Label>
        <Button type="submit">Login</Button>
      </Form>
      <LinkLogin to="/signup">Sign Up</LinkLogin>
    </Container>
  );
};
