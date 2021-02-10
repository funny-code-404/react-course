import React from "react";
import PropTypes from "prop-types";

import { UniqueTech } from "../../../pages";


class DetailUniqueTech extends React.Component {
    state = {
		unique_tech: false,
    }
    
    handleUniqueTech = (e) => {
		this.setState(prevState => ({
			...prevState,
			unique_tech: !prevState.unique_tech,
		}))
	}
    
    render() {
        const { data } = this.props
        return(
            Boolean(data.length) && data.map((x) =>(
                <div key={x} >
                    <p>Unique tech:</p>
                    <button onClick={this.handleUniqueTech} >
                        {
                            !this.state.unique_tech ? x.split('/')[x.split('/').length - 1].replace('_', ' ') : 'close'
                        }
                    </button>
                    {
                        this.state.unique_tech && <UniqueTech url={x} />
                    }
                </div>
            ))
        )
    }
}

DetailUniqueTech.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default DetailUniqueTech;