import React from "react";
import { valid, invalid } from "./Content";
import "bootstrap/dist/css/bootstrap.css";
import "./Form.css";

class Form extends React.Component {
  handleSubmit(event) {
    const isValid = event.target.checkValidity();

    if (!isValid) {
      event.preventDefault();
      event.target.classList.add("was-validated");
    }
  }

  render() {
    return (
      <form
        className="row g-3 needs-validation"
        noValidate
        onSubmit={this.handleSubmit}
      >
        <div className="col-md-6">
          <label htmlFor="validationCustom01" className="form-label">
            Имя
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            pattern="[а-яА-Я]{2,32}"
            placeholder="Алексей"
            required
          />
          <div className="valid-feedback">{valid}</div>
          <div className="invalid-feedback">{invalid}</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom02" className="form-label">
            Фамилия
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom02"
            pattern="[а-яА-Я]{2,32}"
            placeholder="Гуло"
            required
          />
          <div className="valid-feedback">{valid}</div>
          <div className="invalid-feedback">{invalid}</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Адрес электронной почты
          </label>
          <div className="input-group has-validation">
            <input
              type="email"
              className="form-control"
              name="email"
              id="exampleFormControlInput1"
              placeholder="имя@домен.кто"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              aria-describedby="inputGroupPrepend"
              required
            />
            <div className="invalid-feedback">{invalid}</div>
            <div className="valid-feedback">{valid}</div>
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom05" className="form-label">
            Телефон
          </label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            id="validationCustom05"
            pattern="[\W0-9]{7,20}"
            placeholder="Номер мобилки"
            required
          />
          <div className="invalid-feedback">{invalid}</div>
          <div className="valid-feedback">{valid}</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom04" className="form-label">
            Пол
          </label>
          <select className="form-select" id="validationCustom04" required>
            <option selected disabled></option>
            <option>Мужской</option>
            <option>Женский</option>
          </select>
          <div className="valid-feedback">{valid}</div>
          <div className="invalid-feedback">{invalid}</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom06" className="form-label">
            Дата рождения
          </label>
          <input
            type="date"
            className="form-control"
            id="validationCustom06"
            name="trip-start"
            min="1920-01-01"
            max="2021-01-01"
            required
          />
          <div className="valid-feedback">{valid}</div>
          <div className="invalid-feedback">{invalid}</div>
        </div>
        <div className="col-md-12">
          <label htmlFor="validationCustom03" className="form-label">
            Адрес
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom03"
            pattern="[а-яА-Я0-9\W\s]{3,60}"
            placeholder="Минск, Рокосовского"
            required
          />
          <div className="invalid-feedback">{invalid}</div>
          <div className="valid-feedback">{valid}</div>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
              required
            />
            <label className="form-check-label" htmlFor="invalidCheck">
              Заполняя форму, Вы даете согласие на обработку своих персональных
              данных.
            </label>
            <div className="invalid-feedback">Требуется согласие.</div>
          </div>
        </div>
        <div className="col-12 d-md-flex justify-content-md-end">
          <button className="btn btn-outline-success" type="submit">
            Отправить
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
