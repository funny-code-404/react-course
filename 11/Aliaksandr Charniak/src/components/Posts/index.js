import { connect } from 'react-redux'

import Posts from './Posts'

import { postsSelector } from '../../redux/posts/selectors'

const mapStateToProps = (state) => ({
  posts: postsSelector(state),
})

export default connect(mapStateToProps)(Posts)
