import loading from './Loading.gif'
import { StyledImg } from './styles'
const IsLoading = () => {
    return (
        <div>
            <StyledImg>
                <img src={loading} alt="loading..." />
            </StyledImg>
        </div>
    )
}
export default IsLoading