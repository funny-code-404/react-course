import { connect } from 'react-redux';

import { Todo } from './style';

const CurrentTodos = ({ content }) => {
    return (
        <Todo>
            <h2>{content.title}</h2>
            <p>Is it completed? {content.completed ? 'Yess!' : 'Not yet'}</p>
        </Todo>
    )     
}

export const mapStateToProps = ({ currentTodos }) => ({ content: currentTodos.todo });

export default connect(mapStateToProps)(CurrentTodos);