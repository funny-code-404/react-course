import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../../redux/actions';
import { NavLink } from 'react-router-dom'


class MainNavigation extends React.Component {

    handleClick = () => {
        const { path } = this.props;
        this.props.getDataAction(path);
    }
    render() {
        const { title, path } = this.props;
        return (
            <div className='menu_link' >
                <NavLink activeClassName="nav_active" onClick={this.handleClick} exact to={path}>{title}</NavLink>
            </div>
        );
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    getDataAction: path => dispatch(getData(path)),
});


export default connect(mapStateToProps, mapDispatchToProps)(MainNavigation);
