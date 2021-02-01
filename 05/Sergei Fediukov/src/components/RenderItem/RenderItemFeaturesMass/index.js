const RenderItemFeaturesMass = (props) => {
    const { features_mass } = props
    return (
        features_mass.map(x => {
            for (const key in x) {
                return (
                    x[key] &&
                    <div key={key}>
                        <p >{key.charAt(0).toUpperCase() + key.substr(1).replace(/\_/g, ' ')} </p>
                        <ul>
                            {x[key].map((x) => <li key={x}>{x}</li>)}
                        </ul>
                    </div>
                )
            }
        })
    )
}
export default RenderItemFeaturesMass