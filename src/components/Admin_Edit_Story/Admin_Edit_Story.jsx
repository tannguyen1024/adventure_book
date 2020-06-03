import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, TextField, Box, Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, withStyles, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from '../Style/Style'

class Admin_Create_Story extends Component {

    state = { story_id: '', story_title: '', story_description: '', story_path: '', user_id: this.props.user.id}

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_EDIT_STORY', payload: this.props.match.params.id });
        console.log('componentDidMount - MOUNTED')
    }

    componentDidUpdate(prevProps) {
        // Whenever our reducer changes, this performs an update on our state.
        // console.log('-----------------CURRENT PROP IS:', this.props.editStory.id, 'prevPROP IS', prevProps.editStory.id);
        if (this.props.editStory.id !== prevProps.editStory.id) {
            console.log('This is a NEW STORY')
            this.setState({
                story_id: this.props.editStory.id,
                story_title: this.props.editStory.story_title,
                story_description: this.props.editStory.story_description,
                story_path: this.props.editStory.story_path
            })
        }
    }

    handleChangeTitle = (event) => {
        this.setState({ story_title: event.target.value })
        // console.log(this.state)
    }

    handleChangeDescription = (event) => {
        this.setState({ story_description: event.target.value })
        // console.log(this.state)
    }

    handleChangePath = (event) => {
        this.setState({ story_path: event.target.value })
        // console.log(this.state)
    }

    handleClick = () => {
        this.props.dispatch({ type: 'UPDATE_STORY', payload: this.state });
        this.props.history.push('/home');
    }

    render() {
        let story = this.state;
        const { classes } = this.props; /* Material UI classes */
        return (
            <>
                <Card className={classes.snippet}>
                    <CardActionArea>
                        {this.state.story_path === '' ?
                            <CardMedia
                                className={classes.media}
                                image={story.story_path}
                                title='Crafting an adventure!'
                            /> :
                            <CardMedia
                                className={classes.media}
                                image={this.state.story_path}
                                title='Crafting an adventure!'
                            />}
                        <CardContent>
                            <Typography className={classes.cursive} gutterBottom variant="h5" component="h2">
                                <label>Title: </label><Input onChange={this.handleChangeTitle} multiline value={story.story_title} placeholder="Insert story title here." />
                            </Typography>
                            <Typography className={classes.cursive} variant="body2" color="textSecondary" component="div">
                                <label>Description: </label><TextField onChange={this.handleChangeDescription} color="secondary" value={story.story_description} multiline fullWidth={true} placeholder="Insert description here." />
                            </Typography>
                            <Typography className={classes.cursive} variant="body2" color="textSecondary" component="div">
                                <label>Image URL: </label><TextField onChange={this.handleChangePath} color="secondary" value={story.story_path} multiline fullWidth={true} placeholder="Insert path to image here.  Example: http://address.com/picture.png" />
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button onClick={this.handleClick} className={classes.spicy_submit} variant="contained" color="secondary">
                            Submit your Changes {/* Conditionally Renders Start or Edit button */}
                        </Button>
                    </CardActions>
                </Card>
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
    story: reduxState.story,
    editStory: reduxState.editStory
});

// this allows us to use <App /> in index.js
export default connect(reduxStateOnProps)(withStyles(styles)(Admin_Create_Story));