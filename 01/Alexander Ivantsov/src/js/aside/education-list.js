import React from 'react';

class EducatuionList extends React.Component {
    render() {
        const year = this.props.studyYear;
        const place = this.props.studyPlace;
        const spec = this.props.studySpec;

        return (
            <li>
                <div className="edu-pointer"></div>
                <div className="edu-data">
                    <p>{year}</p>
                    <p>{place}</p>
                    <p>{spec}</p>
                </div>
            </li>
        )
    }
}

export default EducatuionList;