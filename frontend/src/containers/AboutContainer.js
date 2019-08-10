import { connect } from 'react-redux';
import About from '../components/About';

const mapStateToProps = state => ({ 
    blogPosts: state.blog.blogPosts
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps 
)(About);
