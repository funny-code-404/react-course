const RenderItemFeatures = (props) => {
    const { features } = props
    return (
        <>
            {
                features.map(x => {
                    for (const key in x) {
                        return (
                            x[key] &&
                            <p key={key}>{key.charAt(0).toUpperCase() + key.substr(1).replace(/\_/g, ' ')}: <span>{x[key]}</span></p>
                        )
                    }
                })
            }
        </>
    )
}
export default RenderItemFeatures