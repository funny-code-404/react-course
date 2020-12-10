import React from 'react';

class FirstForm extends React.Component{
    render() {
        return (
            <fieldset className='fieldset_firstMain'>
                <label>
                    <input
                        className='form-control'
                        name="name"
                        placeholder="enter auto name"
                        onChange={this.props.onChange}
                    />
                    <span>Название авто</span>
                </label>

                <label>
                    <input
                        className='form-control'
                        name="year"
                        type="number"
                        placeholder="enter auto year"
                        onChange={this.props.onChange}
                    />
                    <span>Год авто</span>
                </label>
            </fieldset>
        )
  }
}
export default FirstForm;