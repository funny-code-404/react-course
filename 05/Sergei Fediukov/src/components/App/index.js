import './App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import Routes from '../Routes';
import FooterLogOut from '../FooterLogOut';
import MainNavigation from '../MainNavigation'
import LoaderPrimary from '../Loader/LoaderPrimary';

export function App({ email }) {
  return (
    <div className="App">
      {Boolean(email) &&
        <>
          <MainNavigation />
          <LoaderPrimary />
          <hr />
          <FooterLogOut />
        </>
      }
      <Routes />
    </div>
  );
}
const mapStateToProps = state => {
  return {
    email: state.firebase.auth.email
  };
};

App.propTypes = {
  name: PropTypes.string
}
App.defaultProps = {
  email: undefined
}
export default connect(mapStateToProps)(App);
