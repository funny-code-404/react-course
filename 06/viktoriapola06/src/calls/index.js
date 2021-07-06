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
`;

class Calls extends React.Component {

  onClickBack = () => {
    const { history } = this.props;
    history.goBack()
  };

  render() {
     
    const { params } = this.props.match

    return <div>
      <Card>
      {data.friends.map((item) => item.name === params.name ?<Div>
        {item.calls.map(i => <p>{i}</p>)}
      </Div> : '' )}
      <button onClick={this.onClickBack}>Назад</button>
      </Card>
    </div>
  };
};

export default Calls;