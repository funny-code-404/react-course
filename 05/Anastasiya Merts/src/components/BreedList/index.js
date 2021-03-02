import React from 'react';
import BreedItem from './BreedItem';
import './styles.css';

class BreedList extends React.Component {

    state = {
        order: null,
    };

    handleClick = () => this.setState( prevState => ({
        order: prevState.order === 'asc' ? 'desc' : 'ask',
    }))

    get  getData() {
        const {order} = this.state;
        const {data} = this.props;

        return order ? data.reverse() : data;
    }

    render() {
        const { data } = this.props;
        return Boolean(data) && (
            <div className="container">
                <button className="btn-sort" onClick={this.handleClick}>Sort By Name</button>
                <div className="list-breeds">
                    {this.getData.map(item => <BreedItem key={item.id} {...item} />)}
                </div>
            </div>
        );
    }
}

export default BreedList;