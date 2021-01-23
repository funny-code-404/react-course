const RenderItemNavButtons = ({ props }) => {
    const handleGoBack = () => {
        props.goBack()
    }
    const handleRedirect = () => {
        props.push('/')
    }
    return (
        <div>
            <button onClick={handleGoBack}>go back</button>
            <button onClick={handleRedirect}>go home</button>
        </div>
    )

}
export default RenderItemNavButtons 