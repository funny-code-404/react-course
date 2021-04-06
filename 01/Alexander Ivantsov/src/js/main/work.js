import React from 'react';
import WorkList from './work-list';

const workPlaces = [
    {
        title: 'BOSCH',
        position: 'Sales promoter',
        responsibilities: 'Promote and sell products company, communicate with clients in order to identify needs and subsequent sale of goods',
        year: '04/2021 - Present'
    },
    {
        title: 'JURA',
        position: 'Sales promoter',
        responsibilities: 'Promote and sell products company, communicate with clients in order to identify needs and subsequent sale of goods',
        year: '04/2020 - 04/2021'
    },
    {
        title: 'Honor',
        position: 'Sales promoter',
        responsibilities: 'Promote and sell products company, communicate with clients in order to identify needs and subsequent sale of goods',
        year: '07/2019 - 04/2020'
    }
]

class Work extends React.Component {
    render() {
        return (
            <section>
                <h2>Work experience</h2>
                <ul className="work-exp">
                    {workPlaces.map((item, i) => (
                        <WorkList titleCompany={item.title} posCompany={item.position} respCompany={item.responsibilities} workTime={item.year} key={i} />
                    ))}
                </ul>
            </section>
        )
    }
}

export default Work;