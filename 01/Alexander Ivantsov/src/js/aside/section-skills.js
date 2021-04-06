import React from 'react';

import Skills from './skills';

const skills = [
    {
        text: 'HTML5',
        value: 'html'
    }, 
    {
        text: 'CSS3/SCSS',
        value: 'css'
    }, 
    {
        text: 'JavaScript',
        value: 'js'
    },
    {
        text: 'React.js',
        value: 'react'
    },
    {
        text: 'Git',
        value: 'git'
    }
];

class SectionSkills extends React.Component {
    render() {
        return (
            <section>
                <h2>Skills</h2>
                <ul className="skills">
                    {skills.map((item, i) => (
                        <Skills skill={item.text} scale={item.value} key={i} />
                    ))}
                </ul>
            </section>
        )
    }
}

export default SectionSkills;