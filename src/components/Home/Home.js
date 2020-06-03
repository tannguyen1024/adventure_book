import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import LogOutButton from '../LogOutButton/LogOutButton';
/* IMPORTS HERE */
import { IconButton, Box, Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, withStyles, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from '../Style/Style';
import EditIcon from '@material-ui/icons/Edit';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class Home extends Component {

  componentDidMount = () => {
    this.props.dispatch({ type: 'FETCH_STORY' })
  }

  startClick = (event, story) => {
    this.props.dispatch({ type: 'FETCH_FIRST_SNIPPET', payload: story.id })
    this.props.history.push(`/story/${story.id}`)
  }

  editClick = (event, story) => {
    this.props.dispatch({ type: 'GET_EDIT_STORY', payload: story.id });
    console.log(`You've clicked things!`, story)
    this.props.history.push(`/story/edit/${story.id}`);
  }

  render() {
    const { classes } = this.props;
    const admin = this.props.user.admin;

    return (
      <div>

        <h1 id="welcome">Greetings Adventurer {this.props.user.username}!</h1>

        {/* Administrator Only Buttons */}

        {admin && (
          <>
            <Button className={classes.spicy_submit} variant="contained" color="primary" onClick={() => { this.props.history.push('/admin/user') }}>Manage Adventurers</Button>
            <Button style={{ marginLeft: 25 }} className={classes.spicy_submit} variant="contained" color="primary" onClick={() => { this.props.history.push('/admin/comments') }}>Manage Comments</Button>
            <Button style={{ marginLeft: 25 }} className={classes.spicy_submit} variant="contained" color="primary" onClick={() => { this.props.history.push('/admin/create_story') }}>Create Story</Button>
          </>
        )}

        {/* Standard View */}

        <h2>Choose Your Story</h2>
        {this.props.story.map(story => <div key={story.id}>

          <Card className={classes.snippet}>
            <CardActionArea>
              <Box boxShadow={3}><CardMedia
                className={classes.media}
                image={story.story_path}
                title={story.story_description}
              /></Box>
              <CardContent>
                <Typography className={classes.cursive} gutterBottom variant="h5" component="h2">
                  {story.story_title} 
                  {admin && <IconButton className={classes.spicy_edit} onClick={(event) => this.editClick(event, story)}><EditIcon /></IconButton>}
                  {/* The line above causes a warning in Inspect Tool */}
                </Typography>
                <Typography className={classes.cursive} variant="body2" color="textSecondary" component="p">
                  {story.story_description}
                </Typography>
                <Typography className={classes.cursive} color="textSecondary" component="h6">
                  Crafted by {story.author}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button className={classes.spicy} variant="contained" color="secondary" onClick={(event) => this.startClick(event, story)}>
                Start {/* Conditionally Renders Start or Edit button */}
              </Button>
            </CardActions>
          </Card>
        </div>)}
      </div>
    )
  }
};

Home.propTypes = { classes: PropTypes.object.isRequired };

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const reduxStateOnProps = reduxState => ({
  user: reduxState.user,
  story: reduxState.story,
  firstSnippet: reduxState.firstSnippet
});

// this allows us to use <App /> in index.js
export default connect(reduxStateOnProps)(withStyles(styles)(Home));
