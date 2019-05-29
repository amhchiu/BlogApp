import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, Input } from '@material-ui/core';

import { Editor } from 'slate-react';
import { Value } from 'slate';

const styles = theme => ({
    input: {
        width: 100
    }
});

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
        onKeyDown(event, editor, next){
            let ctrl = null;
            if(window.navigator.platform == 'Win32'){
                ctrl = event.ctrlKey;
            } else {
                ctrl = event.metaKey;
            }
            if(!ctrl || event.key != key) return next();
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

class Create extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value: initialValue 
        };
    }


    handleChange(e){
        let v = e.value.document;
        this.setState({value: e.value});
    }

    onClick(){
        const content = JSON.stringify(this.state.value.toJSON());
        let query = {
            title: 'default title',
            body: content,
            description: 'default description',
            tags: 'science; religion',
            author: 'references account'
        };
        this.props.publishPost(query);
    }

    renderMark(props, editor, next){
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

    getOS() {
        var userAgent = window.navigator.userAgent,
            platform = window.navigator.platform,
            macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
            windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
            iosPlatforms = ['iPhone', 'iPad', 'iPod'],
            os = null;
        if (macosPlatforms.indexOf(platform) !== -1) {
          os = 'Mac OS';
        } else if (iosPlatforms.indexOf(platform) !== -1) {
          os = 'iOS';
        } else if (windowsPlatforms.indexOf(platform) !== -1) {
          os = 'Windows';
        } else if (/Android/.test(userAgent)) {
          os = 'Android';
        } else if (!os && /Linux/.test(platform)) {
          os = 'Linux';
        }
        return os;
      }



    render(){
        return(
            <>
            <Input
                placeholder="Title"
                //disableUnderline
                fullWidth
                inputProps={{
                    'aria-label': 'Description'
                }}
            />
            <Editor 
                plugins={plugins}
                value={this.state.value} 
                onChange={this.handleChange.bind(this)}
                renderMark={this.renderMark}
            />
            <Button onClick={this.onClick.bind(this)}>
                Publish
            </Button>
            </>
        );
    }
}

export default withStyles(styles)(Create);

Create.propTypes = {

};
