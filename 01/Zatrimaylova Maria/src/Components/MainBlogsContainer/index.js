import React from 'react';
import './style.css'

class MainBlogsContainer extends React.Component {
    render() {
        const {title} = this.props;

        return(
            <div className="container__main">
                <h2 className="main__title">
                    {title}
                </h2>

                {this.props.children}
            </div>
        ) 

    }
}

export default MainBlogsContainer; 