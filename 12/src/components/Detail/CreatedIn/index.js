import React from "react";
import PropTypes from "prop-types";

import { CreatedIn } from "../../../pages";
import { en } from "../config";


class DetailCreatedIn extends React.Component {
    state = {
		created_in: false,
    }
    
    hendleCreatedIn = (e) => {
		this.setState(prevState => ({
			...prevState,
			created_in: !prevState.created_in,
		}))
    }
    
    render() {
        const { data } = this.props
        const result = data.split('/')[data.split('/').length - 1].replace('_', ' ');

        return(
            <div>
                <p>{ en.created }</p>
                        <button onClick={this.hendleCreatedIn}>
                            {
                                !this.state.created_in 
                                ? result
                                : 'close'
                            }
                        </button>
                        {
                            this.state.created_in && <CreatedIn url={data} />
                        }
            </div>
        )
    }
}

DetailCreatedIn.propTypes = {
    data: PropTypes.string.isRequired
}

export default DetailCreatedIn;