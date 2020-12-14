import React from 'react'
import { Navigation, IsLoading } from '../../components'
import { Consumer } from '../../context/TechnologiesContext/TechnologiesProvider'
import { StyledDiv, StyledButton } from '../../Styles/styles'

const Technologies = (props) => {
    const handleRedirect = () => {
        props.history.push('/')
    }
    return (
        <div>
            <StyledButton onClick={handleRedirect}>go home</StyledButton>
            <h1>
                Technologies:
            </h1>
            <StyledDiv>
                <Consumer>
                    {
                        ({ data }) =>
                            <>
                                {data[0].start ? <IsLoading /> :
                                    <Navigation menu={data} nav={props.location.pathname} />
                                }
                            </>
                    }
                </Consumer>
            </StyledDiv>
        </div>
    )
}
export default Technologies