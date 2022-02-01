import React from "react"
import './Footer.css'

class Footer extends React.Component {
    render(){
        let {about, contacts} = this.props
        return (
            <div className="footer">
                <div className="info">
                    <h3>About Company:</h3>
                    <p>{about}</p>
                </div>
                <ul className="contacts">
                    {contacts.map((el) => (<li key= {el}>{el}</li>))}
                </ul>
            </div>
        )
    }
}

export default Footer