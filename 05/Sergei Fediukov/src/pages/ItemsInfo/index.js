import React from 'react'
import IsLoading from '../../components/IsLoading'


class ItemsInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // details: this.props.details,
            flag: false,
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
        const { name, army_type, expansion, team_bonus, civilization_bonus, unique_unit, unique_tech, description, age, created_in, cost, build_time, reload_time, attack_delay, movement_rate, line_of_sight, hit_points, range, attack, armor, accuracy, special, attack_bonus, applies_to, search_radius } = this.props.details
        console.log(this.props)
        const handleGoBack = () => {
            this.props.history.goBack()
        }
        const handleRedirect = () => {
            this.props.history.push('/')
        }

        return (
            <div>
                {
                    this.state.flag ?
                        <IsLoading /> :
                        <div className="details">
                            <div>
                                <p>
                                    <button onClick={handleGoBack}>go back</button>
                                    <button onClick={handleRedirect}>go home</button>
                                </p>
                            </div>
                            <h1>
                                {name}
                            </h1>
                            {army_type && <p>Army type: <span>{army_type}</span></p>}
                            {unique_unit && Boolean(unique_unit.length) &&
                                <div>
                                    <p>Unique unit:</p>
                                    <ul>
                                        {unique_unit.map((x, i) => <li key={i}>{x}</li>)}
                                    </ul>
                                </div>}
                            {unique_tech && Boolean(unique_tech.length) &&
                                <div>
                                    <p>Unique tech:</p>
                                    <ul>
                                        {unique_tech.map((x, i) => <li key={i}>{x}</li>)}
                                    </ul>
                                </div>}
                            {team_bonus && <p>Team bonus: <span>{team_bonus}</span></p>}
                            {description && <p>Description: <span>{description}</span></p>}
                            {expansion && <p>Expansion: <span>{expansion}</span></p>}
                            {age && <p>Age: <span>{age}</span></p>}
                            {created_in && <p>Created in: <span>{created_in}</span></p>}
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
                            {reload_time && <p>Reload time: <span>{reload_time}</span></p>}
                            {attack_delay && <p>Attack delay: <span>{attack_delay}</span></p>}
                            {movement_rate && <p>Movement rate: <span>{movement_rate}</span></p>}
                            {line_of_sight && <p>Line of sight: <span>{line_of_sight}</span></p>}
                            {hit_points && <p>Hit_points: <span>{hit_points}</span></p>}
                            {range && <p>Range: <span>{range}</span></p>}
                            {attack && <p>Attack: <span>{attack}</span></p>}
                            {armor && <p>Armor: <span>{armor}</span></p>}
                            {attack_bonus && <div><p>Attack bonus:</p>
                                <ul>
                                    {attack_bonus.map((x, i) => <li key={i}>{x}</li>)}
                                </ul>
                            </div>
                            }
                            {special &&
                                <div>
                                    <p>Special:</p>
                                    <ul>
                                        {special.map((x, i) => <li key={i}>{x}</li>)}
                                    </ul>
                                </div>
                            }
                            {civilization_bonus &&
                                <div>
                                    <p>Civilization bonus:</p>
                                    <ul>
                                        {civilization_bonus.map((x, i) => <li key={i}>{x}</li>)}
                                    </ul>
                                </div>
                            }
                            {applies_to &&
                                <div>
                                    <p>Applies to:</p>
                                    <ul>
                                        {applies_to.map((x, i) => <li key={i}>{x}</li>)}
                                    </ul>
                                </div>
                            }
                            {search_radius && <p>Search radius: <span>{search_radius}</span></p>}
                            {accuracy && <p>Accuracy: <span>{accuracy}</span></p>}

                        </div>
                }
            </div >)
    }
}
export default ItemsInfo