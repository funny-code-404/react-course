import React from 'react';

import FirstForm from "../FirstForm";
import SecondForm from "../SecondForm";
import Spreedshet from "../Spreedshet"

import './mainForm.scss';

class MainForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            firstData : {
                name: '',
                year: '', 
            },
            secondData : {
                country: '',
                used: '',
                defect: '',
            },
            carsList: {
              firstFormList: [],
              secondFormList: [],
              counter: 0,
              id: [],
            },
        };
    }

    handleChangeFirstForm = (event) => {
        const { name, value } = event.target;
        this.setState((prevState) => ({
          ...prevState,
          firstData: {
            ...prevState.firstData,
            [name]: value,
          },
        }));
      }
    
      handleChangeSecondForm = (event) => {
        const { name, value } = event.target;
        this.setState((prevState) => ({
          ...prevState,
          secondData: {
            ...prevState.secondData,
            [name]: value,
          },
        }));
      }
    
      handleChangeCheckboxes = (event) => {
        const { name, checked } = event.target;
        this.setState((prevState) => ({
          ...prevState,
          secondData: {
            ...prevState.secondData,
            [name]: checked,
          },
        }));
      }

      handleClick = (event) => {
        event.preventDefault();
        const {
          firstFormList,
          secondFormList,
          counter,
          id,
        } = this.state.carsList;
        this.setState(
          (prevState) => ({
            ...prevState,
            carsList: {
              ...prevState.carsList,
              counter: counter + 1,
              id: id.concat([counter]),
              firstFormList: firstFormList.concat(this.state.firstData),
              secondFormList: secondFormList.concat(this.state.secondData),
            },
          }),
          () => {
            console.log(this.state);
          }
        );
        console.log(this.state);
      }

  render() {
    const { carsList } = this.state;

    return (
      <div className="container">
        <form>
          <fieldset className="fieldset_mainform">
              <legend>Регистрация Авто</legend>
              <div className="d-flex justify-content-between">
                <FirstForm onChange={this.handleChangeFirstForm} />
                <SecondForm 
                onChange={this.handleChangeSecondForm}
                onChangeCheckboxes={this.handleChangeCheckboxes}
                />
              </div>
              <div className='d-flex justify-content-end pt-2'>
                <button className="btn btn-warning" onClick={this.handleClick}>Add</button>
                <button className="btn btn-light ml-2" type='reset'>Reset</button>
              </div>
          </fieldset>

          <fieldset>
            <Spreedshet carsList={carsList} />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default MainForm;