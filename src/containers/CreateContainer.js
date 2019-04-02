import { connect } from 'react-redux';
import Create from '../components/Create';
import {createNewPost} from '../actions/actions';

const mapStateToProps = state => ({ 
    blogposts: state.blog,
    hasError: state.hasError
});

const mapDispatchToProps = dispatch => ({
    publishPost: content => dispatch(createNewPost(content))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps 
)(Create);