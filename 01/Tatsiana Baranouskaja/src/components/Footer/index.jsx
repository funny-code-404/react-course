
import React from 'react';
import { EMAIL, ADRESS, TEL_NUMBER} from './consts';

import './style.css'

class Footer extends React.Component {
    render() {
        const urlEmail = {mailto:{EMAIL}}
        const urlTel = {tel:{TEL_NUMBER}}
        
        return (
            <footer>
            <div className="container flex-footer">
                <div className="company">
                    <h2>Lorem ipsum dolor</h2>
                    <p>Mollitia nisi vel incidunt a deserunt qui amet, dignissimos dolore eum doloremque.</p>
                </div>
                <div className="contacts">
                <p className="email">E-mail: <a href={urlEmail}>{EMAIL}</a></p>
                <p className="adress">Адрес: {ADRESS}</p>
                <p>Телефон: <a href={urlTel}>{TEL_NUMBER}</a></p>
                </div>
            </div>
            </footer>
        );
    }
}

export default Footer;