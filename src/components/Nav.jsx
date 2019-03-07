import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import { Link } from 'react-router-dom';
import {materialFormStyle} from '../styles/styles';

const styles = theme => ({
    toolbarMain: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
    },
    avatar: {
        margin: 10,
    },
    ...materialFormStyle(theme)
});


class Nav extends React.Component{
    render(){
        const { classes } = this.props;
        return(
            <div>
                <Toolbar className={classes.toolbarMain}>
                    <Avatar alt="amhchiu-avatar" src='../media/eikichi_onizuka.jpg'  className={classes.avatar} />
                    <Link to='/' className={classes.linkRouterStyling}>
                        <Typography variant="h6" color="inherit">
                            AMHCHIU
                        </Typography>
                    </Link>
                </Toolbar>
                <Toolbar variant="dense" className={classes.toolbarSecondary}>
                    <Typography variant="overline" gutterBottom align="center" className={classes.toolbarTitle}>navigation links here</Typography>
                </Toolbar>
            </div>
        );
    }
}

export default withStyles(styles)(Nav);

Nav.propTypes = {
    classes: PropTypes.object.isRequired
};
