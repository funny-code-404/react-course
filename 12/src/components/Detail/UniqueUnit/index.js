import React from "react";
import PropTypes from "prop-types";

import { UniqueUnit } from "../../../pages";


class DetailUniqueUnit extends React.Component {
    state = {
		unique_unit: false,
    }
    
    handleUniqueUnit = (e) => {
		this.setState(prevState => ({
			...prevState,
			unique_unit: !prevState.unique_unit,
		}))
	}
    
    render() {
        return(
            this.props.data.map((x) =>(
                <div key={x}>
                    <p>Unique unit:</p>
                    <button onClick={this.handleUniqueUnit} >
                        {
                            !this.state.unique_unit ? x.split('/')[x.split('/').length - 1].replace('_', ' ') : 'close'
                        }
                    </button>
                    {
                        this.state.unique_unit && <UniqueUnit url={x}/>
                    }
                </div>
            ))
        )
    }
}

DetailUniqueUnit.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string).isRequired
}


export default DetailUniqueUnit;