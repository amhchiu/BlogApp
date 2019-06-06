import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { materialFormStyle } from '../styles/styles'
import Html from 'slate-html-serializer'
import { Editor } from 'slate-react';
import { Value } from 'slate'

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
        const { match: { params }, fetchBlogPostByUID, currentPost } = this.props;
        fetchBlogPostByUID(params.uid); //load currentpost into state. then get object and parse into html. 
        if (currentPost.body) {
            console.log(JSON.parse(currentPost.body));
        }
    }

    serializeToHTML(currentPost) {
        if (currentPost.body) {
            let slatejsObj = JSON.parse(currentPost.body);

        }
    }

    renderMark(props, editor, next) {
        switch (props.mark.type) {
            case 'bold':
                return <strong>{props.children}</strong>;
            case 'code':
                return <code>{props.children}</code>;
            case 'italic':
                return <em>{props.children}</em>;
            case 'strikethrough':
                return <del>{props.children}</del>;
            case 'underline':
                return <u>{props.children}</u>;
            default:
                return next();
        }
    }

    render() {
        const { currentPost } = this.props;
        console.log(currentPost.body)
        return (
            <div>
                {currentPost.body == undefined ? (
                    <p>LOADING</p>
                ) : (
                        <Editor
                            value={Value.fromJSON(JSON.parse(currentPost.body))}
                            renderMark={this.renderMark}
                            readOnly />
                    )}
            </div>
        );
    }
}

export default withStyles(styles)(BlogPost)

BlogPost.propTypes = {

};
