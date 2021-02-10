import React from 'react';

class SecondForm extends React.Component{
  render() {
    return (
        <fieldset className='fieldset_secondForm'>
          <label>
            <select
            className='form-control'
              name="country"
              defaultValue="Select your country"
              onChange={this.props.onChange}
            >
              <option disabled value="Select your country">Select your country</option>
              <option value="USA">USA</option>
              <option value="Germany">Germany</option>
              <option value="China">China</option>
              <option value="Japan">Japan</option>
            </select>
            <span>Страна-производитель</span>
          </label>

          <div className='form-check'>
            <label className='form-check-label'>
              <input
                className='form-check-input'
                name="used"
                type="checkbox"
                onChange={this.props.onChangeCheckboxes}
              />
              Б/у
            </label>
          </div>

          <div className='form-check'>
            <label className='form-check-label'>
              <input
                className='form-check-input'
                name="defect"
                type="checkbox"
                onChange={this.props.onChangeCheckboxes}
              />
              Повреждения
            </label>
          </div>
        </fieldset>
    );
  }
}
export default SecondForm;