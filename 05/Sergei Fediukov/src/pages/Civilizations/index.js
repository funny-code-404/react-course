import React from 'react'
import { Navigation, IsLoading } from '../../components'
import CivilizationsContext from '../../context/CivilizationsContext/index'
import { useContext } from 'react'
import { StyledDiv, StyledButton } from '../../Styles/styles'

const Civilizations = (props) => {
    const handleRedirect = () => {
        props.history.push('/')
    }
    const { data } = useContext(CivilizationsContext)
    return (
        <div>
            <StyledButton onClick={handleRedirect}>go home</StyledButton>
            <h1>
                Civilizations:
            </h1>
            <StyledDiv>
                <>
                    {
                        data[0].start ? <IsLoading /> :
                            <Navigation menu={data} nav={props.location.pathname} />
                    }
                </>
            </StyledDiv>
        </div>
    )
}
export default Civilizations