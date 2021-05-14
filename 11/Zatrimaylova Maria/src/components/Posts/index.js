import React from 'react';
import { connect } from 'react-redux';

import { ACTION_GET_CURRENT_POSTS } from '../../ducks/ducks_currentPost.js';
import { ACTION_GET_POSTS } from '../../ducks/ducks_posts.js';

import Spinner from '../Spinner/index';
import { ListItem } from './style';

class Posts extends React.Component {

    componentDidMount() {
        const { getPostsData } = this.props;
        getPostsData();
    };

    handlePostClick = (e) => {
        const { history, getCurrentPostData } = this.props;
        const currentId = e.currentTarget.closest('li').id;
        
        history.push(`/posts/${currentId}`);
        getCurrentPostData(currentId);
    };

    render() {
        const { content, isFetching } = this.props;
        console.log(isFetching)
        return (
            <>
                {isFetching && <Spinner />}
                <ul>
                {content.map((item) => (
                    <ListItem key={item.id} id={item.id} onClick={this.handlePostClick}>
                        <h3>{item.title}</h3>
                        <span>{item.body.slice(0, 100)}...</span>
                        <p>Click to read post</p>
                    </ListItem>      
                ))}
            </ul>
            </>
        )
    };       
};

export const mapStateToProps = ({ posts }) => ({
    content: posts.posts,
    isFetching: posts.isFetching,
});

export const mapDispatchToProps = (dispatch) => ({
    getCurrentPostData: (value) => { dispatch(ACTION_GET_CURRENT_POSTS(value)) },
    getPostsData: () => {dispatch(ACTION_GET_POSTS())}, 
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts);