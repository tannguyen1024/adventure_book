import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Chip, TextField, Paper, Grid, Avatar, Box, Divider, Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, withStyles, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from '../Style/Style.jsx';
const moment = require('moment');

class Comments extends Component {
    state = { user: this.props.user.id, comment: '', snippet: this.props.id };

    componentDidMount = () => {
        // console.log('History is', this.props.history);
        console.log('id is currently:', this.props.id);
        this.props.dispatch({ type: 'FETCH_ONE_COMMENT', payload: this.props.id })
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({ comment: event.target.value })
    }

    handleClick = () => {
        console.log(this.state)
        this.props.dispatch({ type: 'POST_COMMENT', payload: this.state })
    }

    render() {
        const { classes } = this.props;

        return (
            <>
                <Paper className={classes.paper}>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Chip variant="outlined" label={this.props.user.username} className={classes.chip} />
                        </Grid>
                        <Grid item xs>
                            <TextField onChange={this.handleChange} multiline fullWidth={true} placeholder="How was it?"></TextField>
                        </Grid>
                        <Grid item xs>
                            <Button onClick={this.handleClick} className={classes.spicy}>Leave Feedback</Button>
                        </Grid>
                    </Grid>
                </Paper>

                {this.props.comment.map(comment => {
                    let date = moment(comment.comment_date).format(`MMM Do YYYY hh:mm A`);
                    return (
                        <div key={comment.comment}>
                            <Paper className={classes.paper}>
                                <Grid container wrap="nowrap" spacing={2}>
                                    <Grid item>
                                        <Chip variant="outlined" label={comment.username} className={classes.chip} />
                                    </Grid>
                                    <Grid item xs>
                                        <Typography className={classes.cursive}>{comment.comment}</Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography className={classes.cursive}>
                                            {date}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </div>)
                }
                )}
            </>
        )
    }
}

Comments.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = reduxState => ({
    story: reduxState.story,
    user: reduxState.user,
    snippet: reduxState.snippet,
    child: reduxState.snippetChild,
    comment: reduxState.oneComment
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(withStyles(styles)(Comments));