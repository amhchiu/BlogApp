import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import { Link } from 'react-router-dom';
import { materialFormStyle } from '../styles/styles';

const styles = theme => ({
    toolbarMain: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-evenly'
    },
    avatar: {
        margin: 10,
    },
    ...materialFormStyle(theme)
});

const createOrPublish = () => {
    const { location: { pathname } } = this.props;
    return pathname === '/Create' ? (
        Button
    ) : (
            <Link align='center' to='/Create' className={classes.linkRouterStyling}>
                <Typography variant="overline" gutterBottom inline align="center" className={classes.toolbarTitle}>Create</Typography>
            </Link>
        );
};

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    renderPublishButton(){
        
    }

    render() {
        const { classes, location } = this.props;
        return (
            <div>
                <Toolbar className={classes.toolbarMain}>
                    <Avatar alt="amhchiu-avatar" src='../media/eikichi_onizuka.jpg' className={classes.avatar} />
                    <Link to='/' className={classes.linkRouterStyling}>
                        <Typography variant="h6" color="inherit">
                            AMHCHIU : {location.pathname}
                        </Typography>
                    </Link>
                </Toolbar>
                <Toolbar variant="dense" className={classes.toolbarSecondary}>
                    <Link to='/About' className={classes.linkRouterStyling}>
                        <Typography variant="overline" gutterBottom inline align="center" className={classes.toolbarTitle}>About</Typography>
                    </Link>
                    {location.pathname === '/Create' ? (
                        <div>Publish</div>
                    ) : (
                            <Link align='center' to='/Create' className={classes.linkRouterStyling}>
                                <Typography variant="overline" gutterBottom inline align="center" className={classes.toolbarTitle}>Create</Typography>
                            </Link>
                        )}
                </Toolbar>
            </div>
        );
    }
}

export default withStyles(styles)(Nav);

Nav.propTypes = {
    classes: PropTypes.object.isRequired
};
