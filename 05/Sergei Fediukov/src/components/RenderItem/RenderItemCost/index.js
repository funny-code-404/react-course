const RenderItemCost = (props) => {
    const { cost } = props
    return (
        <div>
            <p>Costs:</p>
            <ul>
                {cost.Wood && <li>Wood - <span>{cost.Wood}</span></li>}
                {cost.Gold && <li>Gold - <span>{cost.Gold}</span></li>}
                {cost.Food && <li>Food - <span>{cost.Food}</span></li>}
                {cost.info && <li>Cost - <span>{cost.info}</span></li>}
                {cost.Stone && <li>Stone - <span>{cost.Stone}</span></li>}
            </ul>
        </div>
    )
}
export default RenderItemCost