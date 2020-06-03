import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, withStyles } from '@material-ui/core';
// import LogOutButton from '../LogOutButton/LogOutButton';
import './NewNav.css';
import styles from './NewNavStyles'

class NewNav extends Component {

  homeClick = () => {
    this.props.history.push('/home')
  }

  aboutClick = () => {
    this.props.history.push('/about')
  }

  render() {
            const { classes } = this.props;
    return (
      <div className="nav">
            <Button className={classes.spicy_button} onClick={this.homeClick}>
            <img src='../../logo_white.png' width="150" alt="Adventure Book" />
            </Button>
            <Button className={classes.spicy} onClick={this.homeClick}>
              {this.props.user.id ? 'Home' : 'Login / Register'}
            </Button>
          {this.props.user.id && (
            <>
              <Button className={classes.spicy} onClick={() => this.props.dispatch({ type: 'LOGOUT' })} to="/home">Log Out</Button>
            </>
          )}
          <Button className={classes.spicy} onClick={this.aboutClick}>
            About
      </Button>
      </div>
    )
  }
};

const reduxStateOnProps = state => ({
  user: state.user,
});

NewNav.propTypes = { classes: PropTypes.object.isRequired };

export default connect(reduxStateOnProps)(withStyles(styles)(withRouter(NewNav)));
