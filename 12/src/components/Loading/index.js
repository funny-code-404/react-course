import React from "react";
import { connect } from "react-redux";

import './loading.css';

export class Loading extends React.Component {
    get isLoading() {
        const {
            civilizations, units, structures,technologies,
            item,createdIn,uniqueTech,uniqueUnit, auth
        } = this.props;

        return civilizations.isFetching || units.isFetching || structures.isFetching || technologies.isFetching || 
                item.isFetching || createdIn.isFetching || uniqueTech.isFetching || uniqueUnit.isFetching || auth.isFetching
    }
    render(){
        return(
            this.isLoading &&
            <div className='loadin'>
                <div className="loader">
                    <div className="inner one"></div>
                    <div className="inner two"></div>
                    <div className="inner three"></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Loading);