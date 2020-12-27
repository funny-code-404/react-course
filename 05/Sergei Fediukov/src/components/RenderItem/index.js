import React from 'react'
import { UniqueUnit, UniqueTech, UniqueCreatedIn } from '../../pages/'
import SmallLoader from '../Loader/SmallLoader'

class RenderItem extends React.Component {
    state = {
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
    componentDidUpdate(prevProps) {
        // console.log(prevProps)
        // console.log(this.props)

        if ((prevProps.data !== this.props.data)) {
            this.setState({
                flag: true
            })
        }
    }
    render() {
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
        const data = this.props.data
        const { name, army_type, expansion, team_bonus, civilization_bonus, unique_unit, unique_tech, description, age, created_in, cost, build_time, reload_time, attack_delay, movement_rate, line_of_sight, hit_points, range, attack, armor, accuracy, special, attack_bonus, search_radius } = data

        const mass = [{ army_type }, { team_bonus }, { description }, { expansion }, { age }, { build_time }, { reload_time }, { attack_delay }, { movement_rate }, { line_of_sight }, { hit_points }, { range }, { attack }, { armor }, { search_radius }, { accuracy }]

        return (<>
            {
                !this.state.flag ?
                    <SmallLoader /> :
                    <div className='result'>
                        {
                            Boolean(this.props.unique) ||
                            <div>
                                <button onClick={handleGoBack}>go back</button>
                                <button onClick={handleRedirect}>go home</button>
                            </div>
                        }
                        <h1>
                            {name}
                        </h1>
                        {
                            mass.map(x => {
                                for (const key in x) {
                                    return (
                                        x[key] &&
                                        <p key={key}>{key.charAt(0).toUpperCase() + key.substr(1).replace(/\_/g, ' ')}: <span>{x[key]}</span></p>
                                    )
                                }
                            })
                        }
                        {
                            unique_unit && Boolean(unique_unit.length) &&
                            <div className='result_inner'>
                                <p>Unique unit:</p>
                                <ul>
                                    {unique_unit.map((x, i) =>
                                        <li key={x}>
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
                                                    <UniqueUnit url={x} />
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
                                        <li key={x}>
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
                                                    <UniqueTech url={x} />
                                                </div>
                                            }
                                        </li>)}
                                </ul>
                            </div>
                        }
                        {
                            created_in &&
                            <div>
                                <p>Created in:</p>
                                <ul>
                                    <li>
                                        <button onClick={hendleCreatedIn}>
                                            {
                                                !this.state.created_in ?
                                                    created_in.split('/')[created_in.split('/').length - 1].replace('_', ' ')
                                                    : 'close'
                                            }
                                        </button>
                                        {
                                            this.state.created_in &&
                                            <div>
                                                <UniqueCreatedIn url={created_in} />
                                            </div>
                                        }
                                    </li>
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
                            attack_bonus && <div><p>Attack bonus:</p>
                                <ul>
                                    {attack_bonus.map((x) => <li key={x}>{x}</li>)}
                                </ul>
                            </div>
                        }
                        {
                            special &&
                            <div>
                                <p>Special:</p>
                                <ul>
                                    {special.map((x) => <li key={x}>{x}</li>)}
                                </ul>
                            </div>
                        }
                        {
                            civilization_bonus &&
                            <div>
                                <p>Civilization bonus:</p>
                                <ul>
                                    {civilization_bonus.map((x) => <li key={x}>{x}</li>)}
                                </ul>
                            </div>
                        }
                    </div>
            }
        </>)
    }
}
export default RenderItem