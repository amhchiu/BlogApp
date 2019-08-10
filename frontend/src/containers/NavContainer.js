import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Nav from '../components/Nav';
import { createNewPost } from '../actions/actions';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = dispatch => ({
    publishPost: query => dispatch(createNewPost(query))
});

export default withRouter(connect(
    mapDispatchToProps
)(Nav));
