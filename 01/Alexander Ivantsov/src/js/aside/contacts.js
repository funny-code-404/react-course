import React from 'react';

class Contacts extends React.Component {
    render() {
        const contact = this.props.contactInfo;
        const contactIcon = this.props.contactIcons;
        const data = this.props.contactData;

        return (
            <li className="copy" data-value={data}>
                {contactIcon}
                {contact}
            </li>
        )
    }
}

export default Contacts;