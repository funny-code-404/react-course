import React from 'react'
import NavigationBar from '../../components/NavigationBar'
const Technologies = (props) => {
    const handleRedirect = () => {
        props.history.push('/')
    }
    return (
        <div>
            <button onClick={handleRedirect}>go home</button>
            <h1>
                Technologies:
        </h1>
            <div className='second_nav'>
                <NavigationBar menu={props.menu} nav={props.path} />
            </div>
        </div>
    )
}
export default Technologies