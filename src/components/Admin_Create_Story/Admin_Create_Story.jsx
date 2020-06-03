import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, TextField, Box, Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, withStyles, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from '../Style/Style'

class Admin_Create_Story extends Component {
    state = { user_id: this.props.user.id, story_title: '', story_description: '', story_path: 'https://cdn.pixabay.com/photo/2017/07/22/11/46/adventure-2528477_1280.jpg'}

    handleTitle = (event) => {
        this.setState({story_title: event.target.value});
    }
    handleDescription = (event) => {
        this.setState({ story_description: event.target.value });
    }
    handlePath = (event) => {
        this.setState({ story_path: event.target.value });
    }
    handleSubmit = () => {
        this.props.dispatch({ type: 'POST_STORY', payload: this.state});
        this.props.dispatch({ type: 'FETCH_STORY' });
        this.props.history.push(`/home`);
    }

    render() {
        const { classes } = this.props;
        return (
            <>
                <div>
                    <Card className={classes.snippet}>
                        <CardActionArea>
                            <Box boxShadow={3}>
                                <CardMedia
                                className={classes.media_create}
                                image='../create.jpeg'
                                title='Crafting an adventure!'
                            /></Box>
                            <CardContent>
                                <Typography className={classes.cursive} gutterBottom variant="h5" component="h2">
                                    <label>Title: </label><Input onChange={this.handleTitle} multiline placeholder="Insert story title here."/>
                                </Typography>
                                <Typography className={classes.cursive} variant="body2" color="textSecondary" component="h1">
                                    <label>Description: </label><TextField onChange={this.handleDescription} color="secondary" multiline fullWidth={true} placeholder="Insert a description of your story here."/>
                                </Typography>
                                <Typography className={classes.cursive} variant="body2" color="textSecondary" component="h1">
                                    <label>Image URL: </label><TextField onChange={this.handlePath} color="secondary" multiline fullWidth={true} placeholder="Insert path to image here.  Example: http://address.com/picture.png"/>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button onClick={this.handleSubmit} className={classes.spicy_submit} variant="contained" color="secondary">
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