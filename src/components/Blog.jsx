import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import BlogPostCard from './BlogPostCard';

const styles = theme => {};

class Blog extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){ 
        console.log(this.props.blogposts);
    }
    
    render(){
        let posts = this.props.blogposts
        return(
            <div>
                {
                    posts.blogposts.map( post =>
                        <BlogPostCard 
                            key={post._id}
                            postObj={post}
                        />
                    )
                }

            </div> 
        );
    }
}

export default withStyles(styles)(Blog);

Blog.propTypes = {
    classes: PropTypes.object.isRequired,
    fetchBlogPosts: PropTypes.any
};
