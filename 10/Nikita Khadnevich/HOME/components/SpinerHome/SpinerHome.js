import React from 'react';
import { connect } from 'react-redux';

class SpinnerHome extends React.Component {

  get fetchingState() {
    const { isPostsFetching} = this.props;
    // Этот гет служит для нас своеобразным хранилищем - в сонст пропс может быть уйма стэйтов спинера разных компонентов,
    return isPostsFetching ;
    // в ретурн же прописывается через || isFetching
  } 

  render() {
    return this.fetchingState && <div className="blocks">
    <div className="block orange"></div>
    <div className="block blue"></div>
  </div>;
  }
}

export const mapStateToProps = ({ posts }) => ({
  isPostsFetching: posts.isFetching,
  //Тут будут прелоады с других компонентов
  //isMusicFetching: music.isFetching
});

export default connect(mapStateToProps)(SpinnerHome);
