import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { Editor } from 'slate-react';
import { Value } from 'slate';

const styles = theme => ({

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
            if(!event.metaKey || event.key != key) return next();
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
        console.log(v);
        this.setState({value: e.value});
    }

    renderMark(props, editor, next){
        switch (props.mark.type) {
            case 'bold':
                return <strong>{props.children}</strong>;
            //Add our new mark renderers...
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

    render(){
        return(
            <Editor 
                plugins={plugins}
                value={this.state.value} 
                onChange={this.handleChange.bind(this)} 
                renderMark={this.renderMark}
            />
        );
    }
}

export default withStyles(styles)(Create);

Create.propTypes = {

};
