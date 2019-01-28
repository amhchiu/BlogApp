import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';


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
    toolbarMain: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    mainGrid: {
        marginTop: theme.spacing.unit*3,
    },
    mainPost: {
        border: 'solid',
        borderWidth: '1px',
        padding: theme.spacing.unit*2,
    }
});

class App extends React.Component{
    render(){
        const { classes } = this.props;
        return(
            <div className={classes.layout}>
                <Toolbar className={classes.toolbarMain}>
                    <Typography variant="h6" color="inherit">
                        Home
                    </Typography>
                </Toolbar>
                <Toolbar variant="dense" className={classes.toolbarSecondary}>
                    <Typography variant="overline" gutterBottom align="center" className={classes.toolbarTitle}>lorem ipsum</Typography>
                </Toolbar>

                <Grid container spacing={40} className={classes.mainGrid}>
                    <Grid item xs={12} border={1}>
                        <Typography variant="h6" gutterBottom>
                            Blog posts go here
                        </Typography>
                        <Typography paragraph variant="body1" gutterBottom className={classes.mainPost}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                        </Typography>   
                    </Grid>
                    <Divider />
                </Grid>
            </div>

        );
    }
}

export default withStyles(styles)(App);

App.propTypes = {
    classes: PropTypes.object.isRequired
};
