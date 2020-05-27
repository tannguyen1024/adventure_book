import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
/* IMPORTS HERE */
import { Button } from '@material-ui/core';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div>
    
    {/* Standard View */}
    
    {props.user.admin===false && (
      <>
        <h1 id="welcome">Greetings Adventurer {props.user.username}!</h1>
        <p>Your ID is: {props.user.id}</p>
        <LogOutButton className="log-in" />
      </>
    )}

    {/* Administrator View */}
    
    {props.user.admin && (
      <>
        <h2>Administrator {props.user.username}'s Landing Page</h2>
        <Button variant="contained" color="primary" onClick={() => {props.history.push('/admin_user')}}>Manage Adventurers</Button>
        <Button variant="contained" color="primary">Manage Comments</Button>
        <Button variant="contained" color="primary">View Stories</Button>
      </>
    )}
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
