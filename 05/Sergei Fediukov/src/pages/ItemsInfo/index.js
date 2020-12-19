import React from 'react'
import { IsLoading } from '../../components'
import UniqueInfo from '../UniqueInfo'
import { StyledButton } from '../../Styles/styles'

const id = () => {
    return `${Math.random().toString(36).substr(2, 9)}`
}

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
    componentDidUpdate(prevProps) {
        if (prevProps.details !== this.props.details) {
            this.setState({
                flag: !prevProps.flag
            })
        }
    }

    render() {
        const { name, army_type, expansion, team_bonus, civilization_bonus, unique_unit, unique_tech, description, age, created_in, cost, build_time, reload_time, attack_delay, movement_rate, line_of_sight, hit_points, range, attack, armor, accuracy, special, attack_bonus, search_radius } = this.props.details

        const mass = [{ army_type }, { team_bonus }, { description }, { expansion }, { age }, { build_time }, { reload_time }, { attack_delay }, { movement_rate }, { line_of_sight }, { hit_points }, { range }, { attack }, { armor }, { search_radius }, { accuracy }]

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
        return (<>
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
                        {
                            unique_unit && Boolean(unique_unit.length) &&
                            <div>
                                <p>Unique unit:</p>
                                <ul>
                                    {unique_unit.map((x, i) =>
                                        <li key={id()}>
                                            <div>
                                                <button onClick={hendleUniqueUnit} i={i}>
                                                    {
                                                        !this.state.unique_unit[i] ?
                                                            x.split('/')[x.split('/').length - 1].replace('_', ' ')
                                                            : 'close'
                                                    }
                                                </button>
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
                        {
                            unique_tech && Boolean(unique_tech.length) &&
                            <div>
                                <p>Unique tech:</p>
                                <ul>
                                    {unique_tech.map((x, i) =>
                                        <li key={id()}>
                                            <div>
                                                <button onClick={hendleUniqueTech} i={i}>
                                                    {
                                                        !this.state.unique_tech[i] ?
                                                            x.split('/')[x.split('/').length - 1].replace('_', ' ')
                                                            : 'close'
                                                    }
                                                </button>
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
                            cost && <div>
                                <p>Costs:</p>
                                <ul>
                                    {cost.Wood && <li>Wood - <span>{cost.Wood}</span></li>}
                                    {cost.Gold && <li>Gold - <span>{cost.Gold}</span></li>}
                                    {cost.Food && <li>Food - <span>{cost.Food}</span></li>}
                                    {cost.info && <li>Cost - <span>{cost.info}</span></li>}
                                    {cost.Stone && <li>Stone - <span>{cost.Stone}</span></li>}
                                </ul>
                            </div>
                        }
                        {
                            mass.map(x => {
                                for (const key in x) {
                                    return (
                                        x[key] &&
                                        <p key={id()}>{key.charAt(0).toUpperCase() + key.substr(1).replace(/\_/g, ' ')}: <span>{x[key]}</span></p>
                                    )
                                }
                            })
                        }
                        {
                            attack_bonus && <div><p>Attack bonus:</p>
                                <ul>
                                    {attack_bonus.map((x) => <li key={id()}>{x}</li>)}
                                </ul>
                            </div>
                        }
                        {
                            special &&
                            <div>
                                <p>Special:</p>
                                <ul>
                                    {special.map((x) => <li key={id()}>{x}</li>)}
                                </ul>
                            </div>
                        }
                        {
                            civilization_bonus &&
                            <div>
                                <p>Civilization bonus:</p>
                                <ul>
                                    {civilization_bonus.map((x) => <li key={id()}>{x}</li>)}
                                </ul>
                            </div>
                        }
                        {
                            created_in &&
                            <div>
                                <p>Created in:</p>
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
                            </div>
                        }
                    </div>
            }
        </ >)
    }
}
export default ItemsInfo