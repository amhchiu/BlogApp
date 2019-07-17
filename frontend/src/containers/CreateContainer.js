import { connect } from 'react-redux';
import Create from '../components/Create';
import { createNewPost, loadDraft, updateDraft } from '../actions/actions';


const mapStateToProps = ({ blog }) => ({
    blogPosts: blog.blogPosts,
    draft: blog.draft
});

const mapDispatchToProps = dispatch => ({
    loadDraft: () => dispatch(loadDraft()),
    updateDraft: (newDraft) => dispatch(updateDraft(newDraft)),
    publishPost: query => dispatch(createNewPost(query))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Create);
