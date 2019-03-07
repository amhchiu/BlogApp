import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { materialFormStyle } from '../styles/styles'

const styles = theme => ({
    
});

class BlogPost extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        console.log(this.props.blogposts)
    }

    render(){
        const classes = this.props;
        return(
            <div>
    hi
            </div>
        );
    }
}

export default withStyles(styles)(BlogPost)

BlogPost.propTypes = {

};
