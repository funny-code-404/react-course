import React from 'react'
import { IsLoading } from '../../components'
import UniqueInfo from '../UniqueInfo'
import { StyledButton } from '../../Styles/styles'

class ItemsInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: false,
            unique_unit: {
                0: false,
                1: false
            },
            unique_tech: {
                0: false,
                1: false
            },
            applies_to: false,
            created_in: false,
        }
    }
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if (nextProps.details !== prevState.details) {
    //         return {
    //             details: nextProps.detals,
    //             flag: !prevState.flag
    //         }
    //     }
    // }
    componentDidUpdate(prevProps) {
        if (prevProps.details !== this.props.details) {
            this.setState({
                flag: !prevProps.flag
            })
        }
    }

    render() {
        const { name, army_type, expansion, team_bonus, civilization_bonus, unique_unit, unique_tech, description, age, created_in, cost, build_time, reload_time, attack_delay, movement_rate, line_of_sight, hit_points, range, attack, armor, accuracy, special, attack_bonus, search_radius } = this.props.details
        const baseURL = 'https://cors-anywhere.herokuapp.com/'

        const handleGoBack = () => {
            this.props.history.goBack()
        }
        const handleRedirect = () => {
            this.props.history.push('/')
        }
        const hendleUniqueUnit = (e) => {
            const i = e.target.attributes[0].value
            this.setState(prevState => ({
                ...prevState,
                unique_unit: {
                    ...prevState.unique_unit,
                    [i]: !prevState.unique_unit[i]
                }
            }))
        }
        const hendleUniqueTech = (e) => {
            const i = e.target.attributes[0].value
            this.setState(prevState => ({
                ...prevState,
                unique_tech: {
                    ...prevState.unique_tech,
                    [i]: !prevState.unique_tech[i]
                }
            }))
        }
        const hendleCreatedIn = () => {
            this.setState(prevState => ({
                ...prevState,
                created_in: !prevState.created_in
            }))
        }
        return (
            <>
                {
                    this.state.flag ?
                        <IsLoading /> :
                        <div className="details">
                            {this.props.history &&
                                <p>
                                    <StyledButton onClick={handleGoBack}>go back</StyledButton>
                                    <StyledButton onClick={handleRedirect}>go home</StyledButton>
                                </p>
                            }
                            <h1>
                                {name}
                            </h1>
                            {army_type && <p>Army type: <span>{army_type}</span></p>}
                            {
                                unique_unit && Boolean(unique_unit.length) &&
                                <div>
                                    <p>Unique unit:</p>
                                    <ul>
                                        {unique_unit.map((x, i) =>
                                            <li key={i}>
                                                <div>
                                                    <StyledButton onClick={hendleUniqueUnit} i={i}>
                                                        {
                                                            !this.state.unique_unit[i] ?
                                                                x.split('/')[x.split('/').length - 1].replace('_', ' ')
                                                                : 'close'
                                                        }
                                                    </StyledButton>
                                                </div>
                                                {
                                                    this.state.unique_unit[i] &&
                                                    <div>
                                                        <UniqueInfo src={`${baseURL}${x}`} />
                                                    </div>
                                                }
                                            </li>)}
                                    </ul>
                                </div>
                            }
                            {unique_tech && Boolean(unique_tech.length) &&
                                <div>
                                    <p>Unique unit:</p>
                                    <ul>
                                        {unique_tech.map((x, i) =>
                                            <li key={i}>
                                                <div>
                                                    <StyledButton onClick={hendleUniqueTech} i={i}>
                                                        {
                                                            !this.state.unique_tech[i] ?
                                                                x.split('/')[x.split('/').length - 1].replace('_', ' ')
                                                                : 'close'
                                                        }
                                                    </StyledButton>
                                                </div>
                                                {
                                                    this.state.unique_tech[i] &&
                                                    <div>
                                                        <UniqueInfo src={`${baseURL}${x}`} />
                                                    </div>
                                                }
                                            </li>)}
                                    </ul>
                                </div>
                            }
                            {
                                team_bonus && <p>Team bonus: <span>{team_bonus}</span></p>
                            }
                            {
                                description && <p>Description: <span>{description}</span></p>
                            }
                            {
                                expansion && <p>Expansion: <span>{expansion}</span></p>
                            }
                            {
                                age && <p>Age: <span>{age}</span></p>
                            }
                            {created_in &&
                                <div>
                                    <ul>
                                        <li>
                                            <StyledButton onClick={hendleCreatedIn}>
                                                {
                                                    !this.state.created_in ?
                                                        created_in.split('/')[created_in.split('/').length - 1].replace('_', ' ')
                                                        : 'close'
                                                }
                                            </StyledButton>

                                            {
                                                this.state.created_in &&
                                                <div>
                                                    <UniqueInfo src={`${baseURL}${created_in}`} />

                                                </div>
                                            }
                                        </li>
                                    </ul>
                                </div>}
                            {cost && <div><p>Costs:</p>
                                <ul>
                                    {cost.Wood && <li>Wood - <span>{cost.Wood}</span></li>}
                                    {cost.Gold && <li>Gold - <span>{cost.Gold}</span></li>}
                                    {cost.Food && <li>Food - <span>{cost.Food}</span></li>}
                                    {cost.info && <li>Cost - <span>{cost.info}</span></li>}
                                    {cost.Stone && <li>Stone - <span>{cost.Stone}</span></li>}
                                </ul>
                            </div>}
                            {build_time && <p>Build time: <span>{build_time}</span></p>}
                            {
                                reload_time && <p>Reload time: <span>{reload_time}</span></p>
                            }
                            {
                                attack_delay && <p>Attack delay: <span>{attack_delay}</span></p>
                            }
                            {
                                movement_rate && <p>Movement rate: <span>{movement_rate}</span></p>
                            }
                            {
                                line_of_sight && <p>Line of sight: <span>{line_of_sight}</span></p>
                            }
                            {
                                hit_points && <p>Hit_points: <span>{hit_points}</span></p>
                            }
                            {
                                range && <p>Range: <span>{range}</span></p>
                            }
                            {
                                attack && <p>Attack: <span>{attack}</span></p>
                            }
                            {
                                armor && <p>Armor: <span>{armor}</span></p>
                            }
                            {
                                attack_bonus && <div><p>Attack bonus:</p>
                                    <ul>
                                        {attack_bonus.map((x, i) => <li key={i}>{x}</li>)}
                                    </ul>
                                </div>
                            }
                            {
                                special &&
                                <div>
                                    <p>Special:</p>
                                    <ul>
                                        {special.map((x, i) => <li key={i}>{x}</li>)}
                                    </ul>
                                </div>
                            }
                            {
                                civilization_bonus &&
                                <div>
                                    <p>Civilization bonus:</p>
                                    <ul>
                                        {civilization_bonus.map((x, i) => <li key={i}>{x}</li>)}
                                    </ul>
                                </div>
                            }
                            {
                                search_radius &&
                                <p>Search radius: <span>{search_radius}</span></p>
                            }
                            {
                                accuracy && <p>Accuracy: <span>{accuracy}</span></p>
                            }

                        </div>
                }
            </ >)
    }
}
export default ItemsInfo