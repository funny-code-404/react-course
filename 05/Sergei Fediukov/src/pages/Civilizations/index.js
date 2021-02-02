import React from 'react'
import { connect } from 'react-redux'
import ResultNavigation from '../../components/ResultNavigation'
import { titles } from '../../config'

export const Civilizations = (props) => {

    const handleRedirect = () => {
        props.history.push('/')
    }
    return (
        <div>
            <button data-testid='nav_button' onClick={handleRedirect}>go home</button>
            <div className='second_nav'>
                <ResultNavigation
                    data={props.civilizations.data}
                    path={props.location.pathname}
                    title={titles.civilizations} />
            </div>
        </div>
    )
}
const mapStateToProps = state => state

export default connect(mapStateToProps)(Civilizations)