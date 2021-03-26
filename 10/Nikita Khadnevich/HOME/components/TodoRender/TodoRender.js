import React from 'react'
import { connect } from 'react-redux';


const TodoRender = (props) => {

   const { getData, posts, error, fetch } = props;

  return (
    <>
    {fetch.map((item, index) => {
      if (props.match.params.id == item.id) {
        return (
          <div className={`Render${String(item.completed)}`} key={item.id}>
              <p>Номер Задания: {item.id}</p>
              <p>Заголовок: {item.title}</p>
              <div className="todoResult"><p>Результат выполнения: </p>
              {String(item.completed) === 'false' ? 
                  <p id='falseTodo'>{String(item.completed)}</p> :
                  <p id='trueTodo'>{String(item.completed)}</p>}
              </div>
          </div>
          )
        }
      })
    }    
    </>
  )
}

export const mapStateToProps = ({ posts }) => ({
   fetch: posts.Arrdata,
   error: posts.error
 });


 export default connect(mapStateToProps)(TodoRender);