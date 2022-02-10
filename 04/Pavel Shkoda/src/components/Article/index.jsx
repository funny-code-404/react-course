import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const url = 'https://jsonplaceholder.typicode.com/posts'

class Article extends React.Component {
    state = {
        data: [],
        showPosts: false,
    }

    async componentDidMount() {
        const response = await fetch(url)
        const data = await response.json()

        this.setState((prevState) => ({
            ...prevState,
            data: data
        }))
    }

    onClick = () => {
        this.setState((prevState) => ({
            ...prevState,
            showPosts: !prevState.showPosts,
        }));
    };

    render() {
        const { data } = this.state

        return (
            <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
                <button type="button" className="btn btn-outline-secondary btn-lg" onClick={this.onClick}>{this.state.showPosts ? <b>Закрыть</b> : <b>Показать</b>}</button>
                <ul>
                    {this.state.showPosts && data.map(({ id, title, body }) => (
                        <li className="card border-secondary mb-3" key={id}>
                            <h2 className="card-title">{title}</h2>
                            <p className="card-text">{body}</p>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Article
