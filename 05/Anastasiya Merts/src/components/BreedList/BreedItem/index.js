import React from 'react';
import BreedDescription from './description';
import './styles.css';

class BreedItem extends React.PureComponent {
    state = {
        open: false,
    };

    handleClick = () => {
        this.setState(prevState => ({
            open: !prevState.open,
        }));
    }

    render() {
        const { name, src, description, weight, temperament, life } = this.props;
        const { open } = this.state;
        const nameButton = open ? "Less" : "Learn more";
        console.log("Render BreedItem: ", name);
        return (
            <>
                {open && (
                    <div className="breed">
                        <h2>{name}</h2>
                        <div className="big-card">
                            <img src={src} alt={name} />
                            <div className="quality">
                                <p><span className="bold">Weight: </span>{weight}</p>
                                <p><span className="bold">Lifespan: </span>{life} years</p>
                                <p><span className="bold">Temperament: </span>{temperament}</p>
                                <p className="description">{description}</p>
                                <p> <button className="button-big-card " onClick={this.handleClick}>{nameButton}</button> </p>
                            </div>
                        </div>
                    </div>

                )}
                {!open && (<div className="card-breed">
                    <img src={src} alt={name} />
                    <p className="name">{name}</p>
                    <button className="button-small-card" onClick={this.handleClick}>{nameButton}</button>
                </div>)}
            </>
        );
    }
}

export default BreedItem;