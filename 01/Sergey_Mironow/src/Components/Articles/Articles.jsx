import React from "react"
import './Articles.css'

class Articles extends React.Component {
    render(){
        let articles = this.props.articles
        return (
            <div className="articles">
                {articles.map((article) => {
                    return (
                        <div key = {article.id} className="article">
                            <h4>{article.title}</h4>
                            <p>{article.text}</p>
                            <button className="articleButton">Открыть</button>
                        </div>
                    )
                })}
            </div>
        )
    }

}

export default Articles