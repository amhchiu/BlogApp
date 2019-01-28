import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
});

class Nav extends React.Component{
    render(){
        const { classes } = this.props;
        return(
            <div>
                <Toolbar className={classes.toolbarMain}>
                    <Typography variant="h6" color="inherit">
                        Home
                    </Typography>
                </Toolbar>
                <Toolbar variant="dense" className={classes.toolbarSecondary}>
                    <Typography variant="overline" gutterBottom align="center" className={classes.toolbarTitle}>lorem ipsum</Typography>
                </Toolbar>
            </div>

        );
    }
}

export default withStyles(styles)(Nav);

Nav.propTypes = {
    classes: PropTypes.object.isRequired
};
