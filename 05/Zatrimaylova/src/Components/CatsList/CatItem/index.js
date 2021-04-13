import React from 'react';
import { Item, CatsPreview, Pop, HiddenInfo, CatsInfo, Image, Span } from './style';

class CatItem extends React.PureComponent {
    state = {
        isOpen: false
    }

    onClick = () => {
        this.setState(prevstate => ({
            isOpen: !prevstate.isOpen
        }));
    }

    render() {
        const { isOpen } = this.state;
        const { name,  image, origin, description, temperament, weight, lifeLenght} = this.props;

        return (
            <Item>
                <CatsPreview>
                    <h2>{name}</h2> 
                    <Pop onClick={this.onClick}>
                        {isOpen ? 'hide' : 'more'}
                    </Pop>
                </CatsPreview>
                { isOpen && 
                    <HiddenInfo>
                        <CatsInfo>
                            <Image src={image} alt="cat's photo"/>
                        </CatsInfo>

                        <CatsInfo>
                            <p>
                                This breed comes from
                                &nbsp;
                                <Span>{origin}</Span>
                            </p>
                            <p>{description}</p>
                            <p>{temperament}</p>
                            <p>Weight rate <Span>{weight}</Span> kg.</p>
                            <p>Average life length <Span>{lifeLenght}</Span> years.</p>
                        </CatsInfo>
                    </HiddenInfo>
                }
            </Item>
        )
    }
}

export default CatItem;