import React, {Component} from 'react';
import Article from "../Article";
import './ArticleList.css'

class ArticleList extends Component{
    render() {
        const {data} = this.props
        return (
            <div className="article">
                {data.map((data, i) =>
                    <Article key={i}  data={data} />
                )}
            </div>
        );
    }
}
export default ArticleList