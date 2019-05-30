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
        console.log(this.props.blogPosts);
    }

    render(){
        let { blogPosts } = this.props;
        return(
            <div>
                {
                    blogPosts.map( post =>
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
    classes: PropTypes.object.isRequired
};
