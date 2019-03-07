import { connect } from 'react-redux';
import BlogPost from '../components/BlogPost';
import { blogpostFromID } from '../actions/actions';

const mapStateToProps = state => ({
    blogposts: state.blog
});

const mapDispatchToProps = dispatch => ({
    fetchBlogPosts: id => dispatch(blogpostFromID(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlogPost);
