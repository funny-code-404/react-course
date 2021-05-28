import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { ACTION_GET_TODO_DETAILS } from "@ducks/todoDetails";
import { URL_TODOS } from "@constants/api";
import capitalizeFirstLetter from "@utils/capitalizeFirstLetter";
import { Container } from "./styles";

const InfoTodoPage = () => {
  const dispatch = useDispatch();
  const todoDetails = useSelector((state) => state.todoDetails.todoDetails);
  const { id } = useParams();

  useEffect(() => {
    dispatch(ACTION_GET_TODO_DETAILS(URL_TODOS, id));
  }, [id, dispatch]);

  return (
    todoDetails && (
      <Container>
        <h3>{capitalizeFirstLetter(todoDetails.title)}</h3>
        {todoDetails.completed ? (
          <span>Completed</span>
        ) : (
          <span>Not completed </span>
        )}
      </Container>
    )
  );
};

export default InfoTodoPage;
