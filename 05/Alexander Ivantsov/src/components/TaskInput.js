import React from 'react';

import { saveTasksLS } from './SaveLocal';

class TaskInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        };
    }

    addTask = event => {
        const { input } = this.state; 
        
        if(input && event.key === 'Enter') {
            this.props.addTask(input);
            this.setState({ input: '' });
            saveTasksLS('tasks', this.props.tasks);
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.addTask);
    }

    inputChange = event => {
        this.setState({ input: event.target.value });
    }

    render() {
        const { input } = this.state;

        return (
            <div className="input-task">
                <input onChange={this.inputChange} value={input} type="text" placeholder="Add new task..." />
            </div>
        )
    }
}

export default TaskInput;