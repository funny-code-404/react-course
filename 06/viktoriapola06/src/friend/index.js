import React from 'react';
import * as data from '../data/data';
import style from 'styled-components';

const Card = style.div`
  width: 30%;
  padding: 20px;
  margin: 20px;
  border: 1px black solid;
  border-radius: 10px;
`;

class Friend extends React.Component {

  onClickBack = () => {
    const { history } = this.props;
    history.goBack()
  };

  render() {

    const { params } = this.props.match;

    return (
    <Card>
      <div>
        {data.friends.map(item => item.name === params.name ? item.friends.map(i => {
          return i.name === params.friend ? <div>
            <div>{i.name}</div>
            <div>{i.phone}</div>
          </div> : ''
        }) : '')}
      </div>
      <button onClick={this.onClickBack}>Назад</button>
    </Card>)    
  };
};

export default Friend;