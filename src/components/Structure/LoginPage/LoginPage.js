import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from '../../Style/Style.jsx';

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )}
        <form onSubmit={this.login}>
          <h1>Login</h1>
          <div>
            <label htmlFor="username">
              Username:
              <Input
                variant="contained"
                fullWidth
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <Input
                variant="outlined"
                fullWidth
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          <div>
            <input
              className="log-in"
              type="submit"
              name="submit"
              value="Log In"
            />
          </div>
        </form>
        <center>
          <p>Don't have an account?</p><Button
            type="button"
            className={classes.spicy_submit}
            onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}
          >
            Create New Account
          </Button>
        </center>
      </div>
    );
  }
}

LoginPage.propTypes = { classes: PropTypes.object.isRequired };
// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const reduxStateOnProps = ({errors}) => ({ errors });
const reduxStateOnProps = state => ({
  errors: state.errors,
});

export default connect(reduxStateOnProps)(withStyles(styles)(LoginPage));
