import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Nav from '../Structure/Nav/Nav';
import Footer from '../Structure/Footer/Footer';
import ProtectedRoute from '../Structure/ProtectedRoute/ProtectedRoute';
import AboutPage from '../Structure/AboutPage/AboutPage';
import Home from '../Home/Home';
import InfoPage from '../Structure/InfoPage/InfoPage';
/* IMPORTS HERE */
import Admin_User from '../Admin_User/Admin_User.jsx';
import Story_Select from '../Story_Select/Story_Select.jsx';
import Snippet_Page from '../Snippet_Page/Snippet_Page.jsx';
import Admin_Create_Story from '../Admin_Create_Story/Admin_Create_Story.jsx';
import Admin_Comments from '../Admin_Comments/Admin_Comments';
import Admin_Edit_Story from '../Admin_Edit_Story/Admin_Edit_Story';
import Admin_Edit_Snippet from '../Admin_Edit_Snippet/Admin_Edit_Snippet';
// import { createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';

import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
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
            <ProtectedRoute exact path="/admin/create_story" component={Admin_Create_Story}/>
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute exact path="/info" component={InfoPage}/>
            {/* Adds link to protected route. */}
            {/* <ProtectedRoute exact path="/admin_story_view" component={Admin_Story_View} /> */}
            <ProtectedRoute exact path="/admin/user" component={Admin_User} />
            <ProtectedRoute exact path="/admin/comments" component={Admin_Comments} />
            <ProtectedRoute exact path="/story/edit/:id" component={Admin_Edit_Story} />
            <ProtectedRoute exact path="/story/:id" component={Story_Select} />
            <ProtectedRoute path="/snippet/:id" component={Snippet_Page} />
            <ProtectedRoute exact path="/snippet_edit/:id" component={Admin_Edit_Snippet} />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />

          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
