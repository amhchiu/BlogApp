import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    mainGrid: {
        marginTop: theme.spacing.unit*3,
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
    },
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
                        <Typography variant="h6" gutterBottom >
                            <a className={classes.hoverChange} onClick={this._onTitleClick.bind(this)}>Blog Title</a>
                        </Typography>
                        <Typography paragraph variant="body1" gutterBottom className={classes.mainPost}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
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

export default withStyles(styles)(BlogPostCard);

BlogPostCard.propTypes = {
    classes: PropTypes.object.isRequired
};
