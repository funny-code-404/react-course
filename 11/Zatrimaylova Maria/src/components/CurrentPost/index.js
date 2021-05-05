import { connect } from 'react-redux';

import { Post, Title, Text } from './style';

const CurrentPost = ({ content }) => {
    return (
        <Post>
            <Title>{content.title}</Title>
            <Text>{content.body}</Text>
        </Post>
    )   
}

export const mapStateToProps = ({ currentPost }) => ({content: currentPost.post});

export default connect(mapStateToProps)(CurrentPost);