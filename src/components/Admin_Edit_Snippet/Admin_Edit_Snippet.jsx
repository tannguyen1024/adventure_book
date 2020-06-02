import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comments from '../Comments/Comments.jsx';
import { Input, TextField, Box, Divider, Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, withStyles, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from '../Style/Style.jsx';

class Snippet_Page extends Component {
    state = {id: this.props.match.params.id, snip_title: '', snip_description: '', snip_ending: '', snip_path: '', story_id: ''};

    handleClick = (child, event) => {
        this.props.history.push(`/snippet/${child.child}`);
        window.location.reload();
        this.setState({ page: this.props.match.params.id });
    }

    componentDidMount = () => {
        // console.log('History is', this.props.history);
        console.log(this.props.match.params.id);
        this.props.dispatch({ type: 'FETCH_SNIPPET', payload: this.props.match.params.id });
    }

    componentDidUpdate(prevProps, prevState) {
        // if (this.props.editStory.id !== prevProps.editStory.id) {
            // console.log('This is a NEW STORY')
            // this.setState({
            //     id: this.props.editStory.id,
            //     snip_title: this.props.editStory.story_title,
            //     snip_description: this.props.editStory.story_description,
            //     snip_path: this.props.editStory.story_path,
            //     snip_ending: this.props.editStory.story_path,
            //     story_id: '',
            // })
        // }
    }
    render() {
        const { classes } = this.props;

        return (
            <>
                {this.props.snippet.map(snippet =>
                    <div key={snippet.id}>
                        <Card className={classes.snippet}>
                            <CardActionArea>
                                <Box boxShadow={3}>
                                    <CardMedia
                                        className={classes.media}
                                        image={snippet.snip_path}
                                        title={snippet.snip_description} />
                                </Box>
                                <CardContent>
                                    <Typography className={classes.cursive} gutterBottom variant="h5" component="h2">
                                        <label>Title: </label><Input value={snippet.snip_title} multiline placeholder="Title goes here."></Input>
                                    </Typography>
                                    <Typography className={classes.cursive} variant="body2" color="textSecondary" component="p">
                                        <label>Description: </label><TextField value={snippet.snip_description} color="secondary" multiline fullWidth={true} placeholder="Insert description here."></TextField>
                                    </Typography>
                                    <Typography className={classes.cursive} variant="body2" color="textSecondary" component="div">
                                        <label>Image URL: </label><TextField color="secondary" value={snippet.snip_path} multiline fullWidth={true} placeholder="Insert path to image here.  Example: http://address.com/picture.png" />
                                    </Typography>
                                    <Typography className={classes.ending}>
                                        {snippet.snip_ending &&
                                            <>
                                                The End.
                                            </>
                                        }</Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>

                                {snippet.snip_ending === false && <>
                                    {this.props.child.map(child =>
                                        <div key={child.id}>
                                            <Button className={classes.spicy} size="small" variant="contained" color="secondary" onClick={(event) => this.handleClick(child, event)}>{child.action}</Button><p />
                                        </div>

                                    )}</>}

                            </CardActions>
                        </Card>

                        {snippet.snip_ending &&
                            <> <br /><Divider /><br /><Comments id={this.props.match.params.id} /> </>}

                    </div>
                )}
            </>
        )
    }
}

Snippet_Page.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = reduxState => ({
    story: reduxState.story,
    user: reduxState.user,
    snippet: reduxState.snippet,
    child: reduxState.snippetChild
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(withStyles(styles)(Snippet_Page));