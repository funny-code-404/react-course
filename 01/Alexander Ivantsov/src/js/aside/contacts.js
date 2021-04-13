import React from 'react';

class Contacts extends React.Component {
    render() {
        const { contactInfo, contactIcons } = this.props;

        return (
            <li className="copy" onClick={() => navigator.clipboard.writeText(contactInfo)}>
                {contactIcons}
                {contactInfo}
            </li>
        )
    }
}

export default Contacts;