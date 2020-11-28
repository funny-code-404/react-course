import React from 'react'

class Result_list extends React.Component {

    render() {
        const { id, allcars_maininfo, allcars_addinfo } = this.props.cars
        return (
            <div className='result_list'>
                {id.length != 0 && <div>
                    <p>Автомобили:</p>
                    <ul>{allcars_maininfo.map((x, i) =>
                        <li key={id[i]}>
                            {x.name == '' ? <span className="error">*марка неизвестна*</span> : x.name}
                            , {x.year == '' ? <span className="error">*год выпуска неизвестен*</span> : x.year}
                            , {allcars_addinfo[i].country == '' ? <span className="error">"*страна неизвестна*</span> : allcars_addinfo[i].country}
                            , {allcars_addinfo[i].used ? 'б/у' : 'новая'}, {allcars_addinfo[i].damage ? 'есть повреждения' : 'без повреждений'}
                        </li>
                    )}
                    </ul>
                </div>}
            </div>
        )
    }
}
export default Result_list