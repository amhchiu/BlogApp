import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import App from '../components/App';
import { blogpostsFromURL } from '../actions/actions';

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = dispatch => ({
    fetchBlogPosts: () => dispatch(blogpostsFromURL())
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App));