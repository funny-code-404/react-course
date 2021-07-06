import React from 'react';
import * as data from '../data/data';
import style from 'styled-components';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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


class Contact extends React.Component {

  onClickBack = () => {
    const { history } = this.props;
    history.goBack()
  }

  onClickCalls = () => {
    const { history } = this.props;
    const { params } = this.props.match
    history.push(`/calls/${params.name}`)
  }

  onClickFriend = (e) => {
    const { history } = this.props;
    const { params } = this.props.match
    history.push(`/contact/${params.name}/${e.target.innerText}`)
  }


  render() {

    const { params } = this.props.match
   
    return <div>
      {data.friends.map((item) => item.name === params.name ? <Card>
        <Link onClick={this.onClickCalls}>{item.phone}</Link>
        <Div>{item.friends.map(i => <Link onClick={this.onClickFriend}>{i.name}</Link>)}</Div>
        <button onClick={this.onClickBack}>Назад</button>
      </Card> : '')}
    </div>
  }
}

export default Contact;