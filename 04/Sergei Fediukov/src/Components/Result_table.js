import React from 'react'

class Result_list extends React.Component {

    render() {
        const { id, allcars_info } = this.props.cars
        return (
            <div className='result_table'>
                {id.length !== 0 && <div>
                    <div className='grid'>
                        <div className='cell'>Марка</div>
                        <div className='cell'>Год</div>
                        <div className='cell'>Страна</div>
                        <div className='cell'>Б/у</div>
                        <div className='cell'>Повреждения</div>
                        <div>{allcars_info.map((x, i) =>
                            <div key={id[i]} className='grid'>
                                <div className='cell'>{x.name === '' ? <span className="error">*марка неизвестна*</span> : x.name}
                                </div>
                                <div className='cell'>{x.year === '' ? <span className="error">*год выпуска неизвестен*</span> : x.year}
                                </div>
                                <div className='cell'> {x.country === '' ? <span className="error">*страна неизвестна*</span> : x.country}
                                </div>
                                <div className='cell'>{x.used ? 'да' : 'нет'}
                                </div>
                                <div className='cell'> {x.damage ? 'да' : 'нет'}
                                </div>
                            </div>
                        )}
                        </div>
                    </div>
                </div>}
            </div>
        )
    }
}
export default Result_list