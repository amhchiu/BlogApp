import { connect } from 'react-redux';
import BlogPost from '../components/BlogPost';
import { blogpostFromID } from '../actions/actions';
import { URLFriendly } from '../../packages/generate';



const mapStateToProps = state => ({
    blogposts: state.blog.blogposts
});

const mapDispatchToProps = dispatch => ({
    fetchBlogPostById: uid => dispatch(blogpostFromID(uid))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlogPost);
