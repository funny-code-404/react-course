import { UniqueUnit } from '../../../pages'
import React from 'react'
class RenderItemUniqueUnit extends React.Component {
    state = {
        unique_unit: {
            0: false,
            1: false
        }
    }
    render() {
        const unique_unit = this.props.unique_unit
        const hendleUniqueUnit = (e) => {
            const i = e.target.attributes[0].value
            this.setState(prevState => ({
                ...prevState,
                unique_unit: {
                    [i]: !prevState.unique_unit[i]
                }
            }))
        }
        return (
            <div className='result_inner' >
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
        )
    }
}
export default RenderItemUniqueUnit

