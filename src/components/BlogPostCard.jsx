import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import { materialFormStyle } from '../styles/styles';

import { URLFriendly } from '../../packages/generate';

const styles = theme => ({
    mainGrid: {
        margin: 'auto',
        maxWidth: '100%',
    },
    mainPost: {
        border: 'solid',
        borderWidth: '1px',
        padding: theme.spacing.unit * 2,
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
        '&hover': {
            background: 'blue'
        }
    },
    ...materialFormStyle(theme)
});

const BlogPostCard = ({ classes, postObj }) => {
    return (
        <div>
            <Grid container justify={'center'} spacing={40} className={classes.mainGrid}>
                <Grid item xs={12} border={1}>
                    <Link to={'/' + postObj.uid + '/' + postObj.urlTitle} className={classes.linkRouterStyling}>
                        <Typography variant="h6" gutterBottom style={{ cursor: 'pointer' }}>
                            {postObj.title}
                        </Typography>
                    </Link>
                    <div className={classes.mainPost}>
                        <Typography gutterBottom noWrap variant="body1" gutterBottom >
                            {postObj.body}
                        </Typography>
                        <div className={classes.mainPostSpan}>
                            <Typography variant='caption' inline>
                                {postObj.author}
                            </Typography>
                            <Typography variant='caption' inline style={{ float: 'right' }}>
                                {' ' + postObj.date}
                            </Typography>
                        </div>
                    </div>
                </Grid>
                <Divider />
            </Grid>
        </div>
    );
}


export default withStyles(styles)(BlogPostCard);

BlogPostCard.propTypes = {
    classes: PropTypes.object.isRequired
};
