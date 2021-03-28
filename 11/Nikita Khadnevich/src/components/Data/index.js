import React from 'react';
import { connect } from 'react-redux';

import { ACTION_GET_DATA } from '../../middlewares/actions';

class Data extends React.Component {
  handleClick = (e) => {
    const { getData } = this.props;

    getData(e.target.dataset.path);
  };

  render() {
    const { data, error } = this.props;

    return (
      <section>
        {data.length ? <div>SUCCESS</div> : error && <h1>{error}</h1>}
        <button data-path='/todos' onClick={this.handleClick}>
          GET todos
        </button>
        <button data-path='/posts' onClick={this.handleClick}>
          GET posts
        </button>
      </section>
    );
  }
}

export const mapStateToProps = ({ todos }) => ({
  data: todos.data,
  error: todos.error,
});

export const mapDispatchToProps = (dispatch) => ({
  getData: (path) => {
    dispatch(ACTION_GET_DATA(path));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Data);
