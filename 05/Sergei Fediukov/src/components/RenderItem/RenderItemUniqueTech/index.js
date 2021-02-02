import { UniqueTech } from '../../../pages'
import React from 'react'
class RenderItemUniqueTech extends React.Component {
    state = {
        unique_tech: {
            0: false,
            1: false
        },
    }
    render() {
        const unique_tech = this.props.unique_tech
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
        return (
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
        )
    }
}
export default RenderItemUniqueTech

