import React from 'react'

class Result_list extends React.Component {

    render() {
        const { id, allcars_info } = this.props.cars
        return (
            <div className='result_list'>
                {id.length != 0 && <div>
                    <p>Автомобили:</p>
                    <ul>{allcars_info.map((x, i) =>
                        <li key={id[i]}>
                            {x.name == '' ? <span className="error">*марка неизвестна*</span> : x.name}
                            , {x.year == '' ? <span className="error">*год выпуска неизвестен*</span> : x.year}
                            , {x.country == '' ? <span className="error">"*страна неизвестна*</span> : x.country}
                            , {x.used ? 'б/у' : 'новая'}, {x.damage ? 'есть повреждения' : 'без повреждений'}
                        </li>
                    )}
                    </ul>
                </div>}
            </div>
        )
    }
}
export default Result_list