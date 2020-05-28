import React, {Component} from 'react';
import {HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import AboutPage from '../AboutPage/AboutPage';
import Home from '../Home/Home';
import InfoPage from '../InfoPage/InfoPage';
/* IMPORTS HERE */
import Admin_Story_View from '../Snippet_Begin/Snippet_Begin.jsx';
import Admin_User from '../Admin_User/Admin_User.jsx';
import Story_Select from '../Story_Select/Story_Select.jsx';

import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
    this.props.dispatch({ type: 'FETCH_USER_ALL' })
    this.props.dispatch({ type: 'FETCH_STORY' })
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route exact path="/about" component={AboutPage}/>
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute exact path="/home" component={Home}/>
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute exact path="/info" component={InfoPage}/>
            {/* Adds link to protected route. */}
            {/* <ProtectedRoute exact path="/admin_story_view" component={Admin_Story_View} /> */}
            <ProtectedRoute exact path="/admin_user" component={Admin_User} />
            <ProtectedRoute exact path="/story/:id" component={Story_Select} />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />

          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
