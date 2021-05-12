import PropTypes from "prop-types";

import { TaskListItem, TaskText, Checkbox, RemoveButton } from "./styles";
import { FiCheck, FiTrash2 } from "react-icons/fi";

const TaskListItemComponent = ({
  taskText,
  isChecked,
  setChecked,
  onClick,
}) => {
  return (
    <TaskListItem>
      <Checkbox onClick={setChecked}>
        {isChecked && <FiCheck className="check" />}
      </Checkbox>

      <TaskText className={isChecked && "isChecked"}>{taskText}</TaskText>

      <RemoveButton onClick={onClick}>
        <FiTrash2 />
      </RemoveButton>
    </TaskListItem>
  );
};

TaskListItemComponent.propTypes = {
  taskText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  setChecked: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
};

export default TaskListItemComponent;
