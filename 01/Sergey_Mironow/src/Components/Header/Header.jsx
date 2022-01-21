import React from "react"
import './Header.css'

class Header extends React.Component {
    render(){
        let {logo, navigation} = this.props
        return (
            <div className="header">
                <img className = "header-logo" src = {logo}/>
                <div className="header-nav">
                    {navigation.map((el) => (<a key={el.name} href = {el.link}>{el.name}</a>))}
                </div>
            </div>
        )
    }
}

export default Header