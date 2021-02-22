import PropTypes from 'prop-types'
const RenderItemNavButtons = ({ props }) => {

    const handleGoBack = () => {
        props.goBack()
    }
    const handleRedirect = () => {
        props.push('/')
    }
    return (
        <div>
            <button className='go_back' onClick={handleGoBack}>go back</button>
            <button className='redirect' onClick={handleRedirect}>go home</button>
        </div>
    )
};

RenderItemNavButtons.propTypes = {
    goBack: PropTypes.func,
    push: PropTypes.func,
}
RenderItemNavButtons.defaultProps = {
    goBack: undefined,
    push: undefined,
}
export default RenderItemNavButtons;