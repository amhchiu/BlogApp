import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, InputBase } from '@material-ui/core';

import { Editor } from 'slate-react';
import { Value } from 'slate';

const styles = theme => ({
    inputForm: {
        fontSize: '2rem',
        color: '#000',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderColor: '#FFF',
        paddingLeft: '0.5rem',
        '&:hover': {
            borderStyle: 'solid',
            borderWidth: '2px',
            borderColor: '#607d8b'
        }
    },
    editor: {
        height: '50vh',
        paddingTop: '0.5rem',
        paddingLeft: '0.5rem',
        fontFamily: 'Roboto'
    }
});



class Create extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: initialValue,
            title: ""
        };
    }


    
    componentDidMount(){
  
    }

    handleContentChange(e) {
        let v = e.value.document;
        this.setState({ value: e.value });
    }

    handleTitleChange(e) {
        this.setState({ title: e.target.value })
    }
    
    /**
     * We are invoking handleChange directly, so we use currying to create
     * a new instance for every invocation. Oterhwise pass input name directly without currying. 
     * curry: this.handleChange('fieldName');
     */
    handleChange = (name) => (event) => {
        this.setState({[name]: event.target.value})
    }

    onClickSubmit() {
        const content = JSON.stringify(this.state.value.toJSON());
        let query = {
            title: this.state.title,
            body: content,
            description: 'default description',
            tags: 'science; religion',
            author: 'references account'
        };
        this.props.publishPost(query);
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
        const { classes } = this.props;
        return (
            <>
                <InputBase
                    placeholder="Title"
                    className={classes.inputForm}
                    inputProps={{
                        'aria-label': 'Description'
                    }}
                    autoFocus
                    fullWidth
                    multiline
                    onChange={this.handleTitleChange.bind(this)}
                />
                <Editor
                    className={classes.editor}
                    plugins={plugins}
                    value={this.state.value}
                    onChange={this.handleContentChange.bind(this)}
                    renderMark={this.renderMark}
                />
                <Button onClick={this.onClickSubmit.bind(this)}>
                    Publish
                </Button>
            </>
        );
    }
}

export default withStyles(styles)(Create);

Create.propTypes = {
    classes: PropTypes.object.isRequired 
};

const initialValue = Value.fromJSON({
    document: {
        nodes: [
            {
                object: 'block',
                type: 'paragraph',
                nodes: [
                    {
                        object: 'text',
                        leaves: [
                            {
                                text: 'A line of text in a paragraph.',
                            },
                        ],
                    },
                ],
            },
        ],
    },
});

const MarkHotkey = (options) => {
    const { type, key } = options;
    return {
        onKeyDown(event, editor, next) {
            let ctrl = null;
            if (window.navigator.platform == 'Win32') {
                ctrl = event.ctrlKey;
            } else {
                ctrl = event.metaKey;
            }
            if (!ctrl || event.key != key) return next();
            event.preventDefault();
            editor.toggleMark(type);
        },
    };
};

const plugins = [
    MarkHotkey({ key: 'b', type: 'bold' }),
    MarkHotkey({ key: '`', type: 'code' }),
    MarkHotkey({ key: 'i', type: 'italic' }),
    MarkHotkey({ key: ';', type: 'strikethrough' }),
    MarkHotkey({ key: 'u', type: 'underline' }),
];
