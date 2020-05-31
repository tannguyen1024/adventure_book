import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Chip, TextField, Paper, Grid, Avatar, Box, Divider, Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, withStyles, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from '../Style/Style.jsx';
const moment = require('moment');

class Admin_Comments extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'FETCH_COMMENT' })
    }

    handleDelete = (event, comment) => {
        console.log ('Your Comment is:',comment)
        this.props.dispatch({ type: 'DELETE_COMMENT', payload: comment.comment_id})
    }

    render() {

        const { classes } = this.props;

        return (
            <>
                {
                    this.props.comment.map(comment => 
                    { let date = moment(comment.comment_date).format(`MMM Do YYYY hh:mm A`);
                        return (<div key={comment.comment}>
                            <Card className={classes.snippet} variant="outlined">
                                <Box boxShadow={3}><CardMedia
                                    className={classes.media_comment}
                                    image={comment.snip_path}
                                    title={comment.snip_title}
                                /></Box>
                                <CardContent>
                                    <Typography className={classes.pos} color="textSecondary" gutterBottom>
                                        {comment.story_title} | {comment.snip_title}<br />
                                        {date}
                                    </Typography>
                                    <Typography className={classes.pos2} color="textPrimary">
                                        {comment.username}
                                    </Typography>
                                    <Typography className={classes.cursive_middle} variant="body2" component="p">
                                        "{comment.comment}"
                                        <br />
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={(event) => this.handleDelete(event, comment)} className={classes.spicy_middle} size="small">Delete Post</Button>
                                </CardActions>
                            </Card>
                        </div>)}
                    )
                }

            </>
        )
    }
}

Admin_Comments.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = reduxState => ({
    user: reduxState.user,
    comment: reduxState.allComment
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(withStyles(styles)(Admin_Comments));