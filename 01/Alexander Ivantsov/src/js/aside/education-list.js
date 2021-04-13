import React from 'react';

class EducatuionList extends React.Component {
    render() {
        const { studyYear, studyPlace, studySpec } = this.props;

        return (
            <li>
                <div className="edu-pointer"></div>
                <div className="edu-data">
                    <p>{studyYear}</p>
                    <p>{studyPlace}</p>
                    <p>{studySpec}</p>
                </div>
            </li>
        )
    }
}

export default EducatuionList;