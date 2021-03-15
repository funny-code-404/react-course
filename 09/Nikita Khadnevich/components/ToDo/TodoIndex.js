import React from 'react';
import { connect } from 'react-redux';

import {
  ACTION_ON_INPUT_NAME,
  ACTIONS_ADD_LIKE,
  ACTIONS_ADD_TODO,
  ACTION_EDIT_TODO,
  ACTION_DELETE_TODO,
  ACTION_SHOW_TODOCHANGED


} from '../../ducks/actionCreators';

const Todoindex = (props) => {

    const { todo, status, names , dataset, texts, datalike } = props;

    const handleName = (e) => {
      const { onInputName } = props;
      onInputName(e.target.value); //1
    };

    const addToDo = (e) => {
      const { onClickADD, texts } = props
      onClickADD(texts)
      e.preventDefault()
    }

    const delTodo = (e) => {
      e.preventDefault()
      const { onClickDEL, todo} = props
      const newArray = [...todo]
      console.log('newArr', newArray)
      newArray.splice(e.target.dataset.num, 1);
      onClickDEL(newArray)
    }

    const changeTodo = (e) => {
      e.preventDefault()
      const { onClickCHANGETODO, status, dataset } = props
      onClickCHANGETODO(!status, e.target.dataset.num)
    }

    const addLike = (e) => {
      e.preventDefault()
      const { onClickADDLIKE, datalike} = props
      const targetClick = e.target.dataset.num
      const counterClick = ++datalike[targetClick].counter
      onClickADDLIKE(targetClick, counterClick)
    }
     // Нужно доделать с правильными линками на массив и правильным сендом в стор

    const editTodo = (e) => {
      e.preventDefault()
      const { onClickEDITTODO, todo, dataset, texts} = props
      const swapTodo = todo[dataset]
      const itemTodo = todo.indexOf(swapTodo);
      if (itemTodo !== -1) {
        todo[itemTodo] = texts;
      }
      onClickEDITTODO(todo)
      changeTodo(e)
    }

    return (
      <>  
        <button onClick={addToDo}>Add Todo</button>
          {todo.map((item, index) => {
          return (
                <div key={index+ 'Class'}className='todoBlock'>
                  <p key={index}>{item}</p>

                  <div className='likeCounter'>
                    <p data-num={index} onClick={addLike}>❤</p>
                    <p>{datalike[0].counter}</p>
                  </div>
                  <div className='buttonBlock'>
                    <p key={index+'Edit'} id='change' data-num={index} onClick={changeTodo}>Change</p>
                    <p key={index+'Delete'} id='delete' data-num={index} onClick={delTodo}>Delete</p>
                  </div>
                </div>
          )})}

          {(status == true && dataset) ?
          <div className='ChangeTodoForm'>
            <input placeholder="Enter Name"  value={names} onChange={handleName} />
            <button data-num={dataset} onClick={editTodo}>Edit Todo</button>
            <button data-num={dataset} onClick={changeTodo}>Close Todo</button>
          </div> 
          : null}
      </>
    );
  }

const mapStateToProps = ({ todo, form }) => ({
  texts: form.names, 
  todo: todo.todoInit,
  status: todo.isChanged.status,
  dataset: todo.isChanged.dataset,
  datalike: todo.datalike
});

const mapDispatchToProps = (dispatch) => ({
  onInputName: (value) => dispatch(ACTION_ON_INPUT_NAME(value)),
  onClickADD: (value) => dispatch(ACTIONS_ADD_TODO(value)),
  onClickDEL: (value) => dispatch(ACTION_DELETE_TODO(value)),
  onClickCHANGETODO: (changed, dataset) => dispatch(ACTION_SHOW_TODOCHANGED(changed, dataset)),
  onClickEDITTODO: (value) => dispatch(ACTION_EDIT_TODO(value)),
  onClickADDLIKE: (target, counter) => dispatch(ACTIONS_ADD_LIKE(target, counter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todoindex);
