import React from 'react';

import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';

const Task = ({task, ...props}) => {

    const CompleteBtn = () => 
        <p onClick={task.completed ? props.deleteTask : props.completedTask} className="completed-btn">
            {task.completed ? <DeleteIcon /> : <DoneIcon />}
        </p>
    return (
        <div className={'task ' + (task.completed ? 'completed' : '')}>
            <p>{task.title}</p>
            <CompleteBtn />
        </div>
    )
}

export default Task;