import { UniqueCreatedIn } from '../../../pages';
import PropTypes from 'prop-types'
import React from 'react';
class RenderItemCreatedIn extends React.Component {
    state = {
        created_in: false,
    }
    render() {
        const { created_in } = this.props;

        const hendleCreatedIn = () => {
            this.setState(prevState => ({
                ...prevState,
                created_in: !prevState.created_in
            }));
        };
        return (
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
        );
    };
};
RenderItemCreatedIn.propTypes = {
    created_in: PropTypes.string
}
export default RenderItemCreatedIn;

