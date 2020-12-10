import React from 'react'

class CarAdditionalInfo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <fieldset className='carAdditionalInfo'>
                <label>
                    <select
                        name='country'
                        onChange={this.props.handleChange}
                        defaultValue='Выберите страну производитель'>
                        <option disabled>Выберите страну производитель</option>
                        <option>США</option>
                        <option>Япония</option>
                        <option>Россия</option>
                        <option>Германия</option>
                        <option>*страна производитель неизвестна*</option>
                    </select>
                    Страна производитель
            </label>
                <label>
                    <input
                        type='checkbox'
                        name='used'
                        onChange={this.props.handleClick} />
                        б/у
                </label>
                <label>
                    <input
                        type='checkbox'
                        name='damage'
                        onChange={this.props.handleClick} />
                    повреждения
                </label>

            </fieldset>
        )
    }
}
export default CarAdditionalInfo