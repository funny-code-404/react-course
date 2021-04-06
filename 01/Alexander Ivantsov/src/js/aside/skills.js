import React from 'react';

class Skills extends React.Component {
    render() {
        const skills = this.props.skill;
        const scales = this.props.scale;
        return (
            <li>
                <h3>{skills}</h3>
                <div className={scales}></div>
            </li>
        )
    }
}

export default Skills;