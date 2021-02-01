import React from 'react'
import { connect } from 'react-redux'
import ResultNavigation from '../../components/ResultNavigation'
import { titles } from '../../config'

export const Structures = (props) => {
    const handleRedirect = () => {
        props.history.push('/')
    }
    return (
        <div>
            <button onClick={handleRedirect}>go home</button>
            <div className='second_nav'>
                <ResultNavigation
                    data={props.structures.data}
                    path={props.location.pathname}
                    title={titles.structures} />
            </div>
        </div>
    )
}
const mapStateToProps = state => state

export default connect(mapStateToProps)(Structures)