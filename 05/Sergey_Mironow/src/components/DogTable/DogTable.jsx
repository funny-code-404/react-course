import React from "react";
import './DogTable.scss';


class DogTable extends React.Component {

    onClick = (event) => {
        this.props.giveBreed(event.target.closest('td').innerText.toLowerCase())
    }

    render(){
        return (
            <div className="DogTable">
                <table>
                    <tbody>
                        <tr>
                            {this.props.dogBreeds.map((el) => (
                                <td key={el} onClick={this.onClick}>{el}</td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}



export default DogTable