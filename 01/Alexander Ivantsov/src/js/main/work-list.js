import React from 'react';

class WorkList extends React.Component {
    render() {
        const title = this.props.titleCompany;
        const position = this.props.posCompany;
        const resp = this.props.respCompany;
        const workTime = this.props.workTime;

        return (
            <li>
                <h3>{title}<span>{workTime}</span></h3>
                <h4>{position}</h4>
                <p>{resp}</p>
            </li>
        )
    }
}

export default WorkList;