import React from 'react';
import { Nav, Ul, Li, } from '../../styles';

const breedNames = ['Akita', 'Chow', 'Boxer', 'Husky', 'Mix'];

class Navigation extends React.Component {
    handleClick = (e, item) => {
        const { onClick } = this.props;
        onClick(item);
    }

    render() {
        const lastIndex = breedNames.length - 1;
        let lastItem = false;
        return (
            <Nav>
                <Ul>
                    {breedNames.map((item, index) => {
                        if (index === lastIndex) {
                            lastItem = true;
                        }
                        return <Li key={index + 1} id={index} lastItem={lastItem} onClick={(e) => this.handleClick(e, item)}>{item}</Li>
                    }
                    )}
                </Ul>
            </Nav>

        );
    }
}

export default Navigation;