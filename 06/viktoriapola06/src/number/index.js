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

const Div = style.div`
  display: flex;
  flex-direction: column; 
  margin: 10px 0; 
`;

class Number extends React.Component {
  onClickBack = () => {
    const { history } = this.props;
    history.goBack()
  }


  render() {

    const { params } = this.props.match
    
    return <div>
      {data.friends.map((item) => item.phone === params.number ? <Card>
        <div>{item.name}</div>
        <Div>{item.friends.map(i => <div>{i.phone}</div>)}</Div>
        <button onClick={this.onClickBack}>Назад</button>
      </Card> : '')}
    </div>
  }
}

export default Number;