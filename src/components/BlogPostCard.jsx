import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import {materialFormStyle} from '../styles/styles';

const styles = theme => ({
    mainGrid: {
        margin: 'auto',
        maxWidth: '100%',
    },
    mainPost: {
        border: 'solid',
        borderWidth: '1px',
        padding: theme.spacing.unit*2,
        height: '4em',
        position: 'relative'
    },
    mainPostSpan: {
        position: 'absolute',
        bottom: 0,
        paddingBottom: '1em',
        right: '1em',
        left: '1em'
    },
    hoverChange: {
        '&hover':{
            background: 'blue'
        }
    },
    ...materialFormStyle(theme)
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
            <div> 
                <Grid container justify={'center'} spacing={40} className={classes.mainGrid}>
                    <Grid item xs={12} border={1}>
                        <Link to={'/entry/'+this.props.postObj.title} className={classes.linkRouterStyling}>
                            <Typography variant="h6" gutterBottom style={{cursor: 'pointer'}} >
                                {this.props.postObj.title}
                            </Typography>
                        </Link>
                        <div className={classes.mainPost}>
                            <Typography gutterBottom noWrap variant="body1" gutterBottom >
                                {this.props.postObj.body}
                            </Typography>   
                            <div className={classes.mainPostSpan}>
                                <Typography variant='caption' inline>
                                    {this.props.postObj.author}
                                </Typography>
                                <Typography variant='caption' inline style={{float: 'right'}}>
                                    {' '+this.props.postObj.date}
                                </Typography>
                            </div>
                        </div>
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
