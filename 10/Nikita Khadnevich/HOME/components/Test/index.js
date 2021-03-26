import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

export const Test = (props) => {

    const { getData, posts, error, fetch } = props;
    
    // useEffect(() => {
    //   getData('/todos');
    // }, []); //  Использую для загрузки сразу

    // const getDataTodos = () => {
    //   return getData('/todos')
    // }

    console.log('props', props.match.path)
    const path = props.match.path

    return (
        <>
          {
            fetch.length ?   
            <div className='List'>
            {fetch.map((item, index) => {
              return (
              <div id={item.title} key={item.id}><Link to={`${path}/${item.id}`}>{item.title}</Link></div>
              )})}
            </div> : error && <h1>{error}</h1>
            }
        </>
    )
  }

export const mapStateToProps = ({ posts }) => ({
  fetch: posts.Arrdata,
  error: posts.error
});


export default connect(mapStateToProps)(Test);

