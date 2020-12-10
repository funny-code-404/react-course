import React from 'react'

class CarMainInfo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <fieldset className='carMainInfo'>
                    <label>
                        <input
                            name='name'
                            onChange={this.props.handleChange}
                            placeholder='Введите марку авто' />
                        Название авто
                    </label>
                    <label>
                        <input name='year'
                            onChange={this.props.handleChange}
                            placeholder='Введите год производства' />
                        Год авто
                    </label>
                </fieldset>
            </div >
        )
    }
}
export default CarMainInfo