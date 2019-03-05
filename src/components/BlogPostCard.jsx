import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    mainGrid: {
        margin: theme.spacing.unit*1,
        border: 'dotted'
    },
    mainPost: {
        border: 'solid',
        borderWidth: '1px',
        padding: theme.spacing.unit*2,
        height: '4em'
    },
    hoverChange: {
        '&hover':{
            background: 'blue'
        }
    }
});

class BlogPostCard extends React.Component{
    constructor(){
        super();
    }


    _onTitleClick(){
        console.log("click");
    }

        
    render(){
        const { classes } = this.props;
        return(
            <div style={{border: 'solid', overflow: 'auto'}}>
                <Grid container justify={'center'} spacing={40} className={classes.mainGrid}>
                    <Grid item xs={12} border={1}>
                        <Typography variant="h6" gutterBottom style={{cursor: 'pointer'}} >
                            <a className={classes.hoverChange} onClick={this._onTitleClick.bind(this)}>{this.props.postObj.title}</a>
                        </Typography>
                        <Typography gutterBottom noWrap variant="body1" gutterBottom className={classes.mainPost}>
                            {this.props.postObj.body}
                        </Typography>   
                        <Typography variant='caption' inline>
                            {this.props.postObj.author}
                        </Typography>
                        <Typography variant='caption' inline>
                            {' '+this.props.postObj.date}
                        </Typography>
                    </Grid>
                    <Divider />
                </Grid>
            </div>

        );
    }
}

export default withStyles(styles)(BlogPostCard);

BlogPostCard.propTypes = {
    classes: PropTypes.object.isRequired
};
