import PropTypes from 'prop-types'
const RenderItemFeaturesMass = ({ features_mass }) => {
    return (
        features_mass.map(x => {
            const key = Object.keys(x);
            return (
                x[key] &&
                <div key={key.join('')}>
                    <p >{key.join('').charAt(0).toUpperCase() + key.join('').substr(1).replace(/\_/g, ' ')} </p>
                    <ul>
                        {x[key].map((x) => <li key={x}>{x}</li>)}
                    </ul>
                </div>
            );
        }
        )
    );
};
RenderItemFeaturesMass.propTypes = {
    features_mass: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default RenderItemFeaturesMass;