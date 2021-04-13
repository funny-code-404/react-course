import React from 'react';

class Counter extends React.Component {
    state = {
        count: 1,
        isShown: true,
        isShowFirst: false,
        isShowSecond: false,
        isShowThird: false,
    };

    handleClick = () => {
        const { isShown } = this.state;

        this.setState(prevState => ({
            ...prevState,
            isShown: !isShown,
        }));
    }

    handleClickFirst = () => {
        const { isShowFirst } = this.state;

        this.setState(prevState => ({
            ...prevState,
            isShowFirst: !isShowFirst,
        }));
    }
    
    handleClickSecond = () => {
        const { isShowSecond } = this.state;

        this.setState(prevState => ({
            ...prevState,
            isShowSecond: !isShowSecond,
        }));
    }
    
    handleClickThird = () => {
        const { isShowThird } = this.state;

        this.setState(prevState => ({
            ...prevState,
            isShowThird: !isShowThird,
        }));
    }

    isDataReceived = true;

    render() {
        const { headerLabel } = this.props;
        const { count, isShown, isShowFirst, isShowSecond, isShowThird } = this.state;

        return (
            <div>
                {isShown && <h1>{headerLabel}</h1>}
                <ul>
                    <li>point 1</li>
                    <li>point 2</li>
                    <li>point 3</li>
                    <li>point 4</li>
                </ul>
                <div className="bar">
                    {isShowFirst ? <button className="arrow active" onClick={this.handleClickFirst}></button> : <button className="arrow" onClick={this.handleClickFirst}></button>}
                    {isShowFirst && <p>Hello, I'm first text!</p>}
                </div>
                <div className="bar">
                    {isShowSecond ? <button className="arrow active" onClick={this.handleClickSecond}></button> : <button className="arrow" onClick={this.handleClickSecond}></button>}    
                    {isShowSecond && <p>Hello, I'm second text!</p>}
                </div>
                <div className="bar">
                    {isShowThird ? <button className="arrow active" onClick={this.handleClickThird}></button> : <button className="arrow" onClick={this.handleClickThird}></button>}
                    {isShowThird && <p>Hello, I'm third text!</p>}
                </div>
                <button onClick={this.handleClick}>Show / Hide header</button>
            </div>
        ) 
    }
} 

export default Counter;