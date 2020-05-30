import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Chip, TextField, Paper, Grid, Avatar, Box, Divider, Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, withStyles, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from '../Style/Style.jsx';

class Admin_Comments extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'FETCH_COMMENT' })
    }

    render() {

        const { classes } = this.props;

        return (
            <>
                {
                    this.props.comment.map(comment => <div key={comment.comment}>
                        
                        <Card className={classes.snippet} variant="outlined">
                            <CardContent><Grid item>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Story: {comment.story_title}<br />Snippet: {comment.snip_title}<br />{comment.comment_date}
                                    </Typography>
                                <Typography variant="h5" component="h2">

                                    </Typography></Grid>
                                <Typography className={classes.pos} color="textSecondary">
                                    {comment.username}
                                    </Typography>
                                <Typography variant="body2" component="p">
                                    {comment.comment}
                                        <br />
                                    Story: {comment.story_title} | Snippet: {comment.snip_title} | {comment.comment_date}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                            </Card>


                    </div>)
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