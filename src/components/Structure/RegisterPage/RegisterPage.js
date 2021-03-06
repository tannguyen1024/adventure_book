import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Input, withStyles, Button } from '@material-ui/core'
import PropTypes from 'prop-types';
import styles from '../../Style/Style.jsx';

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form onSubmit={this.registerUser}>
          <h1>New Adventurer</h1>
          <div>
            <label htmlFor="username">
              Username:
              <Input
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
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          <div>
            <input
              className="register"
              type="submit"
              name="submit"
              value="Register"
            />
          </div>
        </form>
        <center>
          <p>Already have an account?</p><Button
            type="button"
            className={classes.spicy_submit}
            onClick={() => {this.props.dispatch({type: 'SET_TO_LOGIN_MODE'})}}
          >
            Login
          </Button>
        </center>
      </div>
    );
  }
}


RegisterPage.propTypes = { classes: PropTypes.object.isRequired };
// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const reduxStateOnProps = ({errors}) => ({ errors });
const reduxStateOnProps = state => ({
  errors: state.errors,
});

export default connect(reduxStateOnProps)(withStyles(styles)(RegisterPage));

