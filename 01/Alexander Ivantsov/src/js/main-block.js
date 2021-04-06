import React from 'react';

import Work from './main/work';

import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';

class MainBlock extends React.Component {
    render() {
        return (
            <main>
                <h1>Alexander <span>Ivantsov</span></h1>
                <p>Junior Front-end developer</p>
                <Work />
                <section className="add-info">
                    <h2>Languages</h2>
                    <div className="lang">
                        <p>Russian<span>Native</span></p>
                        <p>English<span>Pre-intermediate</span></p>
                    </div>
                </section>
                <section className="interests">
                    <h2>Interests</h2>
                    <div>
                        <FitnessCenterIcon />
                        <MovieFilterIcon />
                        <CardTravelIcon />
                        <EmojiFoodBeverageIcon />
                    </div>
                </section>
            </main>
        )
    }
}

export default MainBlock;