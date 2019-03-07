import { connect } from 'react-redux';
import Blog from '../components/Blog';
import { blogpostsFromURL } from '../actions/actions';

const mapStateToProps = state => ({ 
    blogposts: state.blog,
    hasError: state.hasError
});

const mapDispatchToProps = dispatch => ({
    fetchBlogPosts: () => dispatch(blogpostsFromURL())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps 
)(Blog);