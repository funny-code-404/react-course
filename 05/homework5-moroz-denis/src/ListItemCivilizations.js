import React from 'react'

import uniqueUnitIcon from './assets/images/helmet.svg'
import uniqTechIcon from './assets/images/technical-support.svg'

import './list-item-civilizations.css'

class ListItemCivilizations extends React.PureComponent {

    state = {
        isOpen: false,
    };

    handleClick = () => {
        this.setState((prevState) => ({
            ...prevState,
            isOpen: !prevState.isOpen
        }))
    }

    render() {

        console.log('RENDER LIST ITEM')

        const { isOpen } = this.state;

        const { item } = this.props;

        const { name, expansion, army_type, unique_unit, unique_tech, team_bonus, civilization_bonus } = item;

        const civilizationDescription = (
            <li>
                <div className = 'list-item-civilizations'>
                    <p>Expansion: {expansion}</p>
                    <p>Army type: {army_type}</p>
                    <p>Team bonus: {team_bonus}</p>
                
                    <ul>
                        <h3>Civilization bonus</h3>
                        {civilization_bonus.map((bonus, index) => 
                            <li key = {bonus.index}>{bonus}</li>
                            )}
                    </ul>
                    
                    <div className = 'flex-wrapper'>
                        {
                            Boolean(unique_unit.length) &&
                                <div>
                                    <p>Unique unit</p>
                                    <a href = {unique_unit}><img alt='unit' src = {uniqueUnitIcon}/></a>
                                </div>
                        }
                    
                        {
                            Boolean(unique_tech.length) &&
                                <div>
                                    <p>Unique technology</p>
                                    <a href = {unique_tech}><img alt='tech' src = {uniqTechIcon}/></a>
                                </div>
                        }
                    </div>
                </div>  
            </li>
            
        )   

        return (
            <>
                <h2>{name}</h2>
                <button onClick = {this.handleClick}>Read more</button>

                {isOpen && civilizationDescription}        
            </>

        )
    }
}

export default ListItemCivilizations;




