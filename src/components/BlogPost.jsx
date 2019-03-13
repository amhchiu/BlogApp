import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import marked from 'marked';

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

    getMarkdownText(){
        let rawMarkup = marked('This is _Markdown_.', {sanitized: true});
        console.log(rawMarkup);
        return { __html: rawMarkup};
    }

    render(){
        const classes = this.props;
        return(
            <div dangerouslySetInnerHTML={this.getMarkdownText()} />
        );
    }
}

export default withStyles(styles)(BlogPost)

BlogPost.propTypes = {

};
