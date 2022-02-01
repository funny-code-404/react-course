import React from "react";
import './Posts.scss'

class Posts extends React.Component {
    state = {
        posts: [],
        showPosts: false,
    }

    async componentDidMount(){
        let posts = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
        this.setState((prevState) => ({
            ...prevState,
            posts: prevState.posts.concat(posts)
        }))
    }

    onClick = () => {
        this.setState((prevState) => ({
            ...prevState,
            showPosts: !prevState.showPosts
        }))
    }

    render(){
        return (
            <div className="posts">
                <button onClick={this.onClick}>Show some posts</button>
                {this.state.showPosts && this.state.posts.map((el, i) => <div key={el.id}>
                    <h3>{el.title}</h3>
                    <p>{el.body}</p>
                </div>)}
            </div>
        )
    }
}

export default Posts