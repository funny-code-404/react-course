import React from 'react'
import NavigationBar from '../../components/NavigationBar'
const Units = (props) => {
    const handleRedirect = () => {
        props.history.push('/')
    }
    return (
        < div >
            <button onClick={handleRedirect}>go home</button>
            <h1>
                Units:
        </h1>
            <div className='second_nav'>
                <NavigationBar menu={props.menu} nav={props.path} />
            </div>
        </ div>
    )
}
export default Units