import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, TextField, Box, Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, withStyles, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from '../Style/Style'

class Admin_Create_Story extends Component {

    render() {
        const { classes } = this.props;
        return (
            <>
                <div>
                    <Card className={classes.snippet}>
                        <CardActionArea>
                            <Box boxShadow={3}>
                                <CardMedia
                                className={classes.media}
                                image='../create.jpeg'
                                title='Crafting an adventure!'
                            /></Box>
                            <CardContent>
                                <Typography className={classes.cursive} gutterBottom variant="h5" component="h2">
                                    <label>Title: </label><Input multiline placeholder="Insert story title here."/>
                                </Typography>
                                <Typography className={classes.cursive} variant="body2" color="textSecondary" component="p">
                                    <label>Description: </label><TextField color="secondary" multiline fullWidth={true} placeholder="Insert a description of your story here."/>
                                </Typography>
                                <Typography className={classes.cursive} variant="body2" color="textSecondary" component="p">
                                    <label>Image URL: </label><TextField color="secondary" multiline fullWidth={true} placeholder="Insert path to image here.  Example: http://address.com/picture.png"/>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button className={classes.spicy} variant="contained" color="secondary">
                                Submit your Story {/* Conditionally Renders Start or Edit button */}
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            </>
        )
    }
}

Admin_Create_Story.propTypes = { classes: PropTypes.object.isRequired };

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const reduxStateOnProps = reduxState => ({
    user: reduxState.user,
    story: reduxState.story
});

// this allows us to use <App /> in index.js
export default connect(reduxStateOnProps)(withStyles(styles)(Admin_Create_Story));