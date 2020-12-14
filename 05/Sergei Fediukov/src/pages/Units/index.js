import React from 'react'
import { Navigation, IsLoading } from '../../components'
import UnitsContext from '../../context/UnitsContext/index'
import { useContext } from 'react'
import { StyledDiv, StyledButton } from '../../Styles/styles'

const Units = (props) => {
    const handleRedirect = () => {
        props.history.push('/')
    }
    const { data } = useContext(UnitsContext)
    return (
        <div>
            <StyledButton onClick={handleRedirect}>go home</StyledButton>
            <h1>
                Units:
            </h1>
            <StyledDiv>
                <>
                    {data[0].start ? <IsLoading /> :
                        <Navigation menu={data} nav={props.location.pathname} />
                    }
                </>
            </StyledDiv>
        </div>
    )
}
export default Units