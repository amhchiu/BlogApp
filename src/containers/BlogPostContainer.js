import { connect } from 'react-redux';
import BlogPost from '../components/BlogPost';
import { blogpostFromUID } from '../actions/actions';

const mapStateToProps = state => ({
    blogposts: state.blog.blogposts
});

const mapDispatchToProps = dispatch => ({
    fetchBlogPostByUID: uid => dispatch(blogpostFromUID(uid))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlogPost);
