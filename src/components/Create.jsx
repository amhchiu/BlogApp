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

class Create extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value: initialValue 
        };
    }
    
    handleChange(e){
        this.setState({value: e.value});
    }

    render(){
        return(
            <Editor value={this.state.value} onChange={this.handleChange.bind(this)} />
        );
    }
}

export default withStyles(styles)(Create);

Create.propTypes = {

};
