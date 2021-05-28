import { connect } from 'react-redux'

import Post from './Post'

import { postSelector } from '../../redux/post/selectors'

const mapStateToProps = (state) => ({
  post: postSelector(state),
})

export default connect(mapStateToProps)(Post)
