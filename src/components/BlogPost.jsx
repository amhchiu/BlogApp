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
        /* dispatch action to query mongodb for the single blog post. this is more efficient
         * than returning the whole blogposts array; imagine there are 10000 posts to filter through.
         * once action queries by id or title; it returns the post object. This is stored in the reducer as blog.currentpost
         * which is called via the container.  
        */
        console.log(this.props.blogposts)

        const { match: { params }} = this.props;
        console.log(params.title);
        this.props.fetchBlogPostById(params.title);
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
