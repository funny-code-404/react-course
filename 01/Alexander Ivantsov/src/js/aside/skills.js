import React from 'react';

class Skills extends React.Component {
    render() {
        const { skill, scale} = this.props;
        
        return (
            <li>
                <h3>{skill}</h3>
                <div className={scale}></div>
            </li>
        )
    }
}

export default Skills;