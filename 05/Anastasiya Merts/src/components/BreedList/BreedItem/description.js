import React from 'react';
import './styles.css';

class BreedDescription extends React.Component {
    handleClick = () => {
        this.setState(prevState => ({
            open: !prevState.open,
        }));
    }

    render() {
        const { breedIsOpen, name, src, description, weight, temperament, life } = this.props;
        const nameButton = breedIsOpen ? "Less" : "Learn more";
        return (
            <>
                {breedIsOpen && (
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
            </>
        );
    }
}

export default BreedDescription;