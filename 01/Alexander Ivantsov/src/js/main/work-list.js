import React from 'react';

class WorkList extends React.Component {
    render() {
        const { titleCompany, posCompany, respCompany, workTime } = this.props;

        return (
            <li>
                <h3>{titleCompany}<span>{workTime}</span></h3>
                <h4>{posCompany}</h4>
                <p>{respCompany}</p>
            </li>
        )
    }
}

export default WorkList;