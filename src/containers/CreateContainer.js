import { connect } from 'react-redux';
import Create from '../components/Create';

const mapStateToProps = state => ({ 
    blogposts: state.blog,
    hasError: state.hasError
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps 
)(Create);
