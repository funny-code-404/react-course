import React from 'react'
import SmallLoader from '../Loader/SmallLoader'
import RenderItemNavButtons from './RenderItemNuvButtons'
import RenderItemUniqueUnit from './RenderItemUniqueUnit'
import RenderItemUniqueTech from './RenderItemUniqueTech'
import RenderItemCreatedIn from './RenderItemCreatedIn'
import RenderItemFeatures from './RenderItemFeatures'
import RenderItemFeaturesMass from './RenderItemFeaturesMass'
import RenderItemCost from './RenderItemCost'

class RenderItem extends React.Component {
    state = {
        flag: false,
        applies_to: false,
    }
    componentDidUpdate(prevProps) {
        if ((prevProps.data !== this.props.data)) {
            this.setState({
                flag: true
            })
        }
    }
    render() {
        const data = this.props.data
        const { name, army_type, expansion, team_bonus, civilization_bonus, unique_unit, unique_tech, description, age, created_in, cost, build_time, reload_time, attack_delay, movement_rate, line_of_sight, hit_points, range, attack, armor, accuracy, special, attack_bonus, search_radius } = data
        const features = [{ army_type }, { team_bonus }, { description }, { expansion }, { age }, { build_time }, { reload_time }, { attack_delay }, { movement_rate }, { line_of_sight }, { hit_points }, { range }, { attack }, { armor }, { search_radius }, { accuracy }]
        const features_mass = [{ attack_bonus, special, civilization_bonus }]
        return (<>
            {
                !this.state.flag ?
                    <SmallLoader /> :
                    <div className='result'>
                        {
                            Boolean(this.props.unique) ||
                            <RenderItemNavButtons props={this.props.history} />
                        }
                        <h1>
                            {name}
                        </h1>

                        <RenderItemFeatures features={features} />

                        <RenderItemFeaturesMass features_mass={features_mass} />
                        {
                            cost && <RenderItemCost cost={cost} />
                        }
                        {
                            unique_unit && Boolean(unique_unit.length) &&
                            <RenderItemUniqueUnit unique_unit={unique_unit} />
                        }
                        {
                            unique_tech && Boolean(unique_tech.length) &&
                            <RenderItemUniqueTech unique_tech={unique_tech} />
                        }
                        {
                            created_in &&
                            <RenderItemCreatedIn created_in={created_in} />
                        }
                    </div>
            }
        </>)
    }
}
export default RenderItem