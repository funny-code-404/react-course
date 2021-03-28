import React from 'react';
import { connect } from 'react-redux';

import './styles.css';

class Spinner extends React.Component {
  get fetchingState() {
    const { isTodosFetching } = this.props;

    return isTodosFetching;
  }

  render() {
    return this.fetchingState && <div className='spinner'>Loading...</div>;
  }
}

export const mapStateToProps = ({ todos }) => ({
  isTodosFetching: todos?.isFetching,
});

export default connect(mapStateToProps)(Spinner);
