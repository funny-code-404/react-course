import React from 'react';
import { connect } from 'react-redux';
import Form from './components/Form';
import TodoIndex from './components/ToDo/TodoIndex'
import { todo } from './ducks/todo';

class App extends React.Component {

  render() {
    const { names, email, password } = this.props;

    return (
      <div className='App'>
        <div id='myForm'>
          <form>
            <Form />
            <TodoIndex />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ form, todo }) => {
  return {
    todo: todo.todoInit,
    names: form.names,
  };
};

export default connect(mapStateToProps)(App);
