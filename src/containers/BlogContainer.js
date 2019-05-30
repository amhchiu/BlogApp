import { connect } from 'react-redux';
import Blog from '../components/Blog';
import { blogpostsFromURL } from '../actions/actions';

const mapStateToProps = ({blog}) => ({ 
    blogPosts: blog.blogPosts
});

const mapDispatchToProps = dispatch => ({
    fetchBlogPosts: () => dispatch(blogpostsFromURL())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps 
)(Blog);
