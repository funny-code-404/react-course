import React from 'react'
import { connect } from 'react-redux';


const PostsRender = (props) => {

   const { getData, posts, error, fetch } = props;

  return (
    <>
    {fetch.map((item, index) => {
      if (props.match.params.id == item.id) {
        return (
          <div className='RenderPost' key={item.id}>
            <p>Номер статьи: {item.id}</p>
            <p>Заголовок: {item.title}</p>
            <p>Краткое содержание: {item.body}</p>
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


 export default connect(mapStateToProps)(PostsRender);