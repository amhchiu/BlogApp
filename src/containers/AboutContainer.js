import { connect } from 'react-redux';
import About from '../components/About';

const mapStateToProps = state => ({ 
    blogposts: state.blog,
    hasError: state.hasError
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps 
)(About);
