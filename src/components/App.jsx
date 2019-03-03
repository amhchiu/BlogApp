import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Nav from './Nav.jsx';
import Main from './Main.jsx';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
});

class App extends React.Component{
    render(){
        const { classes } = this.props;
        return(
            <div className={classes.layout}>
                <Nav />
                <Main />
            </div>
        );
    }
}

export default withStyles(styles)(App);

App.propTypes = {
    classes: PropTypes.object.isRequired
};
