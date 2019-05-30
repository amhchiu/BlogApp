import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { materialFormStyle } from '../styles/styles'

const styles = theme => ({

});

class BlogPost extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        /* dispatch action to query mongodb for the single blog post. this is more efficient
         * than returning the whole blogposts array; imagine there are 10000 posts to filter through.
         * once action queries by id or title; it returns the post object. This is stored in the reducer as blog.currentpost
         * which is called via the container.  
        */
        const { match: { params } } = this.props;
        this.props.fetchBlogPostByUID(params.uid); //this.props.match.params.uid
    }

    serializeToHTML(){

    }

    render() {
        const { classes, currentPost } = this.props;
        console.log(currentPost);
        return (
            <div>
                hi
            </div>
        );
    }
}

export default withStyles(styles)(BlogPost)

BlogPost.propTypes = {

};
