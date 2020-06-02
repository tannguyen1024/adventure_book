import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comments from '../Comments/Comments.jsx';
import { Input, TextField, Box, Divider, Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, withStyles, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from '../Style/Style.jsx';

/* Radio MUI */
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';

class Snippet_Page extends Component {
    state = { id: this.props.match.params.id, snip_title: '', snip_description: '', snip_ending: '', snip_path: '', story_id: '' };

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
        if (this.props.snippet.id !== prevProps.snippet.id) {
            console.log('This is a NEW STORY')
            this.setState({
                id: this.props.snippet.id,
                snip_title: this.props.snippet.snip_title,
                snip_description: this.props.snippet.snip_description,
                snip_path: this.props.snippet.snip_path,
                snip_ending: String(this.props.snippet.snip_ending),
                story_id: this.props.snippet.story_id,
            })
        }
    }

    changeTitle = (event) => {
        this.setState({ snip_title: event.target.value })
    }
    changeDescription = (event) => {
        this.setState({ snip_description: event.target.value })
    }
    changePath = (event) => {
        this.setState({ snip_path: event.target.value })
    }
    handleSubmit = () => {
        console.log('SUBMIT:', this.state)
    }

    endingChange = (event) => {
        this.setState({ snip_ending: event.target.value })
    };


    render() {
        let selectedValue = String(this.state.snip_ending);
        const { classes } = this.props;
        console.log('STATE IS CURRENTLY:', this.state)
        return (
            <>


                <Card className={classes.snippet}>
                    <CardActionArea>
                        <Box boxShadow={3}>
                            <CardMedia
                                className={classes.media}
                                image={this.state.snip_path}
                                title={this.props.snippet.snip_description} />
                        </Box>
                        <CardContent>
                            <Typography className={classes.cursive} gutterBottom variant="h5" component="h2">
                                <label>Title: </label><Input onChange={this.changeTitle} value={this.state.snip_title} multiline placeholder="Title goes here."></Input>
                            </Typography>
                            <Typography className={classes.cursive} variant="body2" color="textSecondary" component="div">
                                <label>Description: </label><TextField onChange={this.changeDescription} value={this.state.snip_description} color="secondary" multiline fullWidth={true} placeholder="Insert description here."></TextField>
                            </Typography>
                            <Typography className={classes.cursive} variant="body2" color="textSecondary" component="div">
                                <label>Image URL: </label><TextField onChange={this.changePath} color="secondary" value={this.state.snip_path} multiline fullWidth={true} placeholder="Insert path to image here.  Example: http://address.com/picture.png" />
                            </Typography>
                            <Typography className={classes.ending}>
                                ENDING:
                                True<Radio
                                    checked={selectedValue === 'true'}
                                    onChange={this.endingChange}
                                    value='true'
                                    name="radio-button-demo"
                                    inputProps={{ 'aria-label': 'TRUE' }}
                                />
                                False<Radio
                                    checked={selectedValue === 'false'}
                                    onChange={this.endingChange}
                                    value='false'
                                    name="radio-button-demo"
                                    inputProps={{ 'aria-label': 'FALSE' }}
                                />
                            </Typography>
                            
                        </CardContent>
                        <CardContent>
                        <Button onClick={this.handleSubmit} className={classes.spicy} variant="contained" color="secondary">
                            Submit Changes
                        </Button>
                        </CardContent>
                    </CardActionArea>
                </Card>

                {this.state.snip_ending === 'false' &&
                <Card className={classes.snippet}>
                <CardContent>
                        <Typography className={classes.cursive} gutterBottom variant="h5" component="h2">
                            Connection Manager
                        </Typography>
                        <Typography className={classes.cursive} variant="body2" color="textSecondary" component="div">
                            <label>Action Name: </label>
                            <Input multiline fullWidth placeholder="Insert a new action">
                                </Input> <Button onClick={this.connectionAdd} className={classes.spicy_connection} variant="contained" color="secondary">
                                Add Connection
                        </Button>
                        </Typography>
                </CardContent>
                <CardContent>
                    <Typography className={classes.cursive} variant="body2" color="textSecondary" component="div">
                        Current Connections:
                    </Typography>
                    <Divider/>
                </CardContent>
                <CardContent> {/* Conditionally renders if ending is true or false */}
                {this.props.snippet.snip_ending === false && <>
                    {this.props.child.map(child =>
                        <div key={child.id}>
                            <Button className={classes.spicy} size="small" variant="contained" color="secondary" onClick={(event) => this.handleClick(child, event)}>{child.action}</Button><p />
                        </div>

                    )}</>}
                    </CardContent>
                </Card>}

                {/* {this.props.snippet.snip_ending &&
                    <> <br /><Divider /><br /><Comments id={this.props.match.params.id} /> </>} */}



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