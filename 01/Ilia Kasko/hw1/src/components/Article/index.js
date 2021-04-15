import React, {Component} from 'react';

class Article extends Component{
    render() {
        const {data} = this.props
        return (
            <div>
                <h1>{data.headArticle}</h1>
                <p>{data.bodyArticle}</p>
            </div>
        );
    }

}

export default Article