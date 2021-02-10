import { auth } from '../../firebase'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const FooterLogOut = ({ email }) => {

    const handleLogOut = () => {
        auth.signOut()

    }
    return (
        <div className='footer'>
            <div>
                Curren user:
                <span className='user_email'>{email}</span>
            </div>
            <div>
                <button onClick={handleLogOut} className='form_btn'>Log out</button>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        email: state.firebase.auth.email
    };
};

FooterLogOut.propTypes = {
    email: PropTypes.string
}
FooterLogOut.defaultProps = {
    email: undefined
}

export default connect(mapStateToProps)(FooterLogOut)