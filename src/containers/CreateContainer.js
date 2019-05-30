import { connect } from 'react-redux';
import Create from '../components/Create';
import {createNewPost} from '../actions/actions';

const mapStateToProps = ({blog}) => ({ 
    blogPosts: blog.blogPosts
});

const mapDispatchToProps = dispatch => ({
    publishPost: query => dispatch(createNewPost(query))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps 
)(Create);
