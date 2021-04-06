import React from 'react';
import {render} from 'react-dom';

class Container extends React.Component{
    render() {
        return (
            <header>
            <div className ='container flex-wrapper'>
            <h1>MyFreedom IT</h1>
            <nav>
                <ul>
                    <li> <a href="#">Home</a> </li>
                    <li> <a href="#">Services</a></li>
                    <li> <a href="#">Work</a> </li>
                    <li> <a href="#">About</a> </li>

                </ul>
            </nav>
            <a href="tel:(01)666693456">(01) 666 - 693 - 456</a>
            </div>
            </header>
        )
    }
}
export default Container;