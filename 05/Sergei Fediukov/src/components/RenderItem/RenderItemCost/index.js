import PropTypes from 'prop-types'
const RenderItemCost = ({ cost }) => {
    return (
        <div>
            <p>Costs:</p>
            <ul>
                {cost.Wood && <li>Wood - <span>{cost.Wood}</span></li>}
                {cost.Gold && <li>Gold - <span>{cost.Gold}</span></li>}
                {cost.Food && <li>Food - <span>{cost.Food}</span></li>}
                {cost.Stone && <li>Stone - <span>{cost.Stone}</span></li>}
                {cost.info && <li>Cost - <span>{cost.info}</span></li>}
            </ul>
        </div>
    );
};

RenderItemCost.propTypes = {
    cost: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
        Wood: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        history: PropTypes.object,
        Gold: PropTypes.number,
        Stone: PropTypes.number,
        Gold: PropTypes.number,
        info: PropTypes.string,
    })])
}
RenderItemCost.defaultProps = {
    Wood: undefined,
    Gold: undefined,
    Stone: undefined,
    Gold: undefined,
    info: undefined,
}
export default RenderItemCost;