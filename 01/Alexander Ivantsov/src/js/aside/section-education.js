import React from 'react';
import EducatuionList from './education-list';

const educationPlaces = [
    {
        year: '11/2020 - 05/2021',
        text: 'IT-school Myfreedom',
        spec: 'Front-end developer'
    },
    {
        year: '2011 - 2015',
        text: 'BRANCH BNTU "MINSK STATE POLYTECHNICAL COLLEGE"',
        spec: 'Electrical Technician'
    },
    {
        year: '2006 - 2011',
        text: 'STATE EDUCATIONAL INSTITUTION "GYMNASIUM NO. 5 OF MINSK"'
    }
]

class SectionEducation extends React.Component {
    render() {
        return (
            <section>
                <h2>Education</h2>
                <ul className="education">
                    {educationPlaces.map((item, i) => (
                        <EducatuionList studyYear={item.year} studyPlace={item.text} studySpec={item.spec} key={i} />
                    ))}
                </ul>
            </section>
        )
    }
}

export default SectionEducation;