import PropTypes from 'prop-types'

const RenderItemFeatures = ({ features }) => {
    return (
        <>
            {
                features.map(x => {
                    const key = Object.keys(x)
                    return (
                        x[key] &&
                        <p key={key.join('')}>{key.join('').charAt(0).toUpperCase() + key.join('').substr(1).replace(/\_/g, ' ')}: <span>{x[key]}</span></p>
                    )
                })
            }
        </>
    );
};

RenderItemFeatures.propTypes = {
    features: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default RenderItemFeatures;