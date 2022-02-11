import React from "react";
import './Table.scss'


class Table extends React.Component {

    handleTrClick = (event) => {
        const lineData = event.target.closest('tr').innerHTML.match(/(?:<th>(.+?)<\/th>)<th>(.+?)<\/th><th>(.+?)<\/th><th>(.+?)<\/th><th>(.+?)<\/th>/)
        this.props.lineClick({
            brand: lineData[2],
            model: lineData[3],
            year: lineData[4],
            price: lineData[5],
        })
    }



    render(){
        const cars = this.props.cars
        return (
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Марка</th>
                        <th>Модель</th>
                        <th>Год выпуска</th>
                        <th>Цена</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((el, i) => <tr key={el.model} onClick={this.handleTrClick}>
                        <th>{i + 1}</th>
                        <th>{el.brand}</th>
                        <th>{el.model}</th>
                        <th>{el.year}</th>
                        <th>{el.price}</th>
                    </tr>)}
                </tbody>
            </table>
        )
    }
}

export default Table