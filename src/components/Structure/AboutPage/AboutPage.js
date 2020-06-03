import React, {Component} from 'react';
import { Card, CardActionArea, CardMedia, CardContent, withStyles, Typography}  from '@material-ui/core'
import styles from '../../Style/Style';
import PropTypes from 'prop-types';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'



class AboutPage extends Component { 
  render(){
  const { classes } = this.props;

    return(
      <div>
        <div>
          <Card className={classes.snippet}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80"
                title="Picture of Adventure" />
            <CardContent>
          <Typography className={classes.cursive} gutterBottom variant="h5" component="h2">
              <label>What is Adventure Book?</label>
              </Typography>
            <Typography className={classes.cursive} variant="body2" color="textSecondary" component="div">
              Adventure Book is aimed to fully realize the joys of the Choose Your Own Adventure novels that were popular in the 90’s.  These novels often started on one page and the reader would make decisions that would take them to a different page of the book.  This branching decision making made every reader’s experience different.  The Adventure Book doesn’t stop there however!  As an administrator, you can also create your own adventure from scratch with multiple branching paths and endings.
            </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    )
  }
};

AboutPage.propTypes = { classes: PropTypes.object.isRequired };

export default (withStyles(styles)(AboutPage));
