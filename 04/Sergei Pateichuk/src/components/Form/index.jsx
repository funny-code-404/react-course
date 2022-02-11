import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input
            name="brand"
            placeholder="Марка"
            value={this.props.newBrand}
            onChange={this.props.handleInputChange}
          />

          <input
            name="model"
            placeholder="Модель"
            value={this.props.newModel}
            onChange={this.props.handleInputChange}
          />

          <input
            name="year"
            placeholder="Год выпуска"
            value={this.props.newYear}
            onChange={this.props.handleInputChange}
          />

          <input
            name="price"
            placeholder="Цена"
            value={this.props.newPrice}
            onChange={this.props.handleInputChange}
          />

          <button>Добавить</button>
        </form>
      </div>
    );
  }
}

export default Form;
