import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import NavContainer from '../containers/NavContainer';
import Main from './Main';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 5,
        marginRight: theme.spacing.unit * 5,
        [theme.breakpoints.up(800 + theme.spacing.unit * 3 * 2)]: {
            width: 800,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
});

class App extends React.Component{

    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.fetchBlogPosts();
    }

    render(){
        const { classes } = this.props;
        return(
            <div className={classes.layout}>
                <NavContainer />
                <Main />
            </div>
        );
    }
}

export default withStyles(styles)(App);

App.propTypes = {
    classes: PropTypes.object.isRequired
};
