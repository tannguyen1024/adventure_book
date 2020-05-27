import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import LogOutButton from '../LogOutButton/LogOutButton';
/* IMPORTS HERE */
import { Button } from '@material-ui/core';
import { Card } from '@material-ui/core';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class Home extends Component {

  startClick = (event, story) => {
    console.log(`You've clicked things!`, story)
    this.props.dispatch({ type: 'STORE_STORY', payload: story })
  }

  render() {

    const admin = this.props.user.admin;



    return (
      <div>

        <h1 id="welcome">Greetings Adventurer {this.props.user.username}!</h1>

        {/* Administrator View */}

        {admin && (
          <>
            <Button variant="contained" color="primary" onClick={() => { this.props.history.push('/admin_user') }}>Manage Adventurers</Button>
            <Button variant="contained" color="primary">Manage Comments</Button>
          </>
        )}

        {/* Standard View */}

        <h3>Choose a Story</h3>
        {this.props.story.map(story => <div key={story.id}>
          <h5>{story.story_title}</h5>
          <img src={story.story_path} alt={story.story_title} width='100px' /><br />
          {story.story_description}<br/>
          by {story.author}<br/>
          <Button variant="contained" color="secondary" onClick={(event) => this.startClick(event, story)}>
            {admin ? 'Edit' : 'Start'} {/* Conditionally Renders Start or Edit button */}
          </Button>

        </div>)}
      </div>
    )
  }
};

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
  story: state.story
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Home);
