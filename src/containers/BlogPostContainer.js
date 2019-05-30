import { connect } from 'react-redux';
import BlogPost from '../components/BlogPost';
import { blogpostFromUID } from '../actions/actions';

const mapStateToProps = ({blog}) => ({
    blogPosts: blog.blogPosts
});

const mapDispatchToProps = dispatch => ({
    fetchBlogPostByUID: uid => dispatch(blogpostFromUID(uid))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlogPost);
