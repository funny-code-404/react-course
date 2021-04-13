import React from 'react';

import Contacts from './aside/contacts';
import SectionSkills from './aside/section-skills';
import SectionEducation from './aside/section-education';

import photo from '../images/myphoto.jpg';

import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';

const contactMenu = [
    {
        text: 'Republic of Belarus, Minsk',
        icon: <LocationOnIcon />
    }, 
    {
        text: '+375259559125',
        icon: <PhoneIcon />
    }, 
    {
        text: 'pr.minsk.ivantsov@gmail.com',
        icon: <MailIcon />
    },
    {
        text: 'github.com/ivantsov-aa',
        icon: <GitHubIcon />
    }
];

class Aside extends React.Component {
    render() {
        return (
            <aside>
                <header>
                    <img src={photo} alt={photo}/>
                    <ul>
                        {contactMenu.map((item, i) => (
                            <Contacts contactInfo={item.text} contactIcons={item.icon} key={i} />
                        ))}
                    </ul>
                </header>
                <SectionSkills />
                <SectionEducation />
            </aside>
        )
    }
}

export default Aside;