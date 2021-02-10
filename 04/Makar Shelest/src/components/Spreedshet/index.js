import React from 'react';

import './spreedshet.scss'

class Spreedshet extends React.Component{
    render() {
        const { firstFormList, secondFormList, id } = this.props.carsList;

        return (
        <div className="spreedshet">
            <div className="table-grid">
                <div>Марка</div>
                <div>Год</div>
                <div>Страна</div>
                <div>Б/у</div>
                <div>Повреждения</div>
            </div>

        {firstFormList.map((item, index) => (
          <div key={id[index]} className="table-grid-content">
            <div>{item.name === "" ? <span>Not choosen</span> : item.name}</div>
            <div>{item.year === "" ? <span>Not choosen</span> : item.year}</div>
            <div>
              {secondFormList[index].country === "" ? (
                <span>Not choosen</span>
              ) : (
                secondFormList[index].country
              )}
            </div>
            <div>{secondFormList[index].used ? "Yes" : "No"}</div>
            <div>{secondFormList[index].defect ? "Yes" : "No"}</div>
          </div>
        ))}
      </div>
    );
  }
}
export default Spreedshet;   