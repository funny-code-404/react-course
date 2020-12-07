import React from 'react'
import IsLoading from '../components/IsLoading'

const withDetails = (Component, url) => class extends React.Component {
    state = {
        data: {},
        isFetching: true,
        error: null
    }

    async componentDidMount() {

        (+this.props.match.params.id) ?
            fetch(`${url}/${this.props.match.params.id}`)
                .then((res) => res.json())
                .then((json) => ({
                    id: json.id,
                    name: json.name,
                    expansion: json.expansion,
                    army_type: json.army_type,
                    team_bonus: json.team_bonus,
                    created_in: json.created_in,
                    civilization_bonus: json.civilization_bonus,
                    unique_unit: json.unique_unit,
                    unique_tech: json.unique_tech,
                    description: json.description,
                    age: json.age,
                    cost: json.cost,
                    build_time: json.build_time,
                    reload_time: json.reload_time,
                    attack_delay: json.attack_delay,
                    movement_rate: json.movement_rate,
                    line_of_sight: json.line_of_sight,
                    hit_points: json.hit_points,
                    range: json.range,
                    attack: json.attack,
                    attack_bonus: json.attack_bonus,
                    armor: json.armor,
                    accuracy: json.accuracy,
                    special: json.special,
                    applies_to: json.applies_to
                }
                ))
                .then((data) => this.setState({
                    data: data,
                    isFetching: false
                }))
                .catch(e => {
                    console.log(e)
                    this.setState(prevState => ({
                        ...prevState,
                        error: e
                    }))
                })
            : this.props.history.goBack()
    }
    render() {
        console.log(this.props.match.params.id)
        const { data, isFetching, error } = this.state
        return (
            isFetching ?
                <IsLoading /> :
                error ?
                    <div>
                        {`Error: ${error.message}`}
                    </div> :
                    <Component details={data} history={this.props.history} />
        )
    }
}
export default withDetails