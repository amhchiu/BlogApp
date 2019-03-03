import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import BlogPost from './BlogPost';

const styles = theme => {};

class Blog extends React.Component{

    constructor(props){
        super(props);
    }

    componentWillMount(){
        
    }

    render(){
        return(
            <div>
                <BlogPost />
            </div> 
        );
    }
}

export default withStyles(styles)(Blog);

Blog.propTypes = {
    classes: PropTypes.object.isRequired
};
