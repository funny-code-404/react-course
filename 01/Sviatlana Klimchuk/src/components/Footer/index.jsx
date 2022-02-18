import React from  "react";

import './styles.css';

class Footer extends React.Component {
    render() {
        return (
        <footer className="footer">
     <div className="footer_text">
        <p className="footer_text-secondary"><span> ООО "Банделиков и партнеры</span></p>
        <p className="footer_text-3">Тел.<a href="tel:8900988045590">890-09880-45590</a></p>
        <p className="footer_text-4"><a href="mailto:email@email.com">email@email.com</a></p>
    </div>
    </footer>
        );
    }
}

export default Footer;
