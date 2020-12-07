import React from 'react'
import NavigationBar from '../../components/NavigationBar'
const Structures = (props) => {
    const handleRedirect = () => {
        props.history.push('/')
    }
    return (
        <div>
            <button onClick={handleRedirect}>go home</button>
            <h1>
                Structures:
        </h1>

            <div className='second_nav'>
                <NavigationBar menu={props.menu} nav={props.path} />
            </div>
        </div>
    )
}
export default Structures