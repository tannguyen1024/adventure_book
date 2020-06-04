import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comments from '../Comments/Comments.jsx';
import { IconButton, Input, TextField, Box, Divider, Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, withStyles, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from '../Style/Style.jsx';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import Swal from 'sweetalert2/src/sweetalert2.js';
import '../Style/Swal.scss';

/* Radio MUI */
import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormLabel from '@material-ui/core/FormLabel';

class Snippet_Page extends Component {
    state = { id: this.props.match.params.id, snip_title: '', snip_description: '', snip_ending: '', snip_path: '', story_id: '', action: '', };

    handleClick = (child, event) => {
        this.props.history.push(`/snippet/${child.child}`);
        window.location.reload();
        this.setState({ page: this.props.match.params.id });
    }

    componentDidMount = () => {
        this.props.dispatch({ type: 'FETCH_SNIPPET', payload: this.props.match.params.id });
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('-----------------CURRENT PROP IS:', this.props.snippetEdit.id, 'prevPROP IS', prevProps.snippetEdit.id);
        // console.log('-----------------CURRENT PROP IS:', this.props.snippet.id, 'prevPROP IS', prevProps.snippet.id)
        if (this.props.snippetEdit.id !== prevProps.snippetEdit.id) {
            console.log('This is a NEW STORY')
            // this.props.dispatch({ type: 'FETCH_SNIPPET', payload: this.props.match.params.id })
            this.setState({
                id: this.props.snippetEdit.id,
                snip_title: this.props.snippetEdit.snip_title,
                snip_description: this.props.snippetEdit.snip_description,
                snip_path: this.props.snippetEdit.snip_path,
                snip_ending: String(this.props.snippetEdit.snip_ending),
                story_id: this.props.snippetEdit.story_id,
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
        this.setState({ snip_path: event.target.value });
    }

    handleSubmit = () => {
        this.props.dispatch({type: 'UPDATE_SNIPPET', payload: this.state});
        console.log('SUBMIT:', this.state);
        this.props.history.push(`/snippet/${this.props.match.params.id}`);
      }

    deleteAction = (event, child) => {
        console.log('SUBMITTING FOR DELETION:', child);
        Swal.fire({
            title: "Delete the following action?",
            text: child.action,
            imageUrl: this.props.snippetEdit.snip_path,
            // imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Image of Snippet',
            showCancelButton: true,
            textColor: 'black',
            confirmButtonColor: '#8a2b2b',
            cancelButtonColor: '#657394',
            confirmButtonText: 'YES, REMOVE IT',
            cancelButtonText: 'NO, KEEP IT',
            background: '#fff url("https://cdn2.vectorstock.com/i/1000x1000/15/31/low-polygon-shapes-black-light-background-dark-vector-21691531.jpg")',
        }).then((result) => {
            if (result.value) {
                this.props.dispatch({ type: 'DELETE_ACTION', payload: child });
                Swal.fire(
                    'Deleted!',
                    'Your action has been deleted.',
                    'success'
                )
                this.setState({ state: this.state }); /* Used to re-render DOM */
                this.props.dispatch({ type: 'FETCH_SNIPPET', payload: this.props.match.params.id });
            }
        })
    }

    endingChange = (event) => {
        this.setState({ snip_ending: event.target.value });
    };


    handleChangeAction = (event) => {
        this.setState({ action: event.target.value });
    }

    handleClickAction = () => {
        if(this.state.action===''){
            alert('Please enter an action before submitting.'); return};
        console.log('Submitting:', this.state.action);
        this.props.dispatch({type: 'NEW_ACTION', payload: this.state});
        this.setState({ state: this.state }); /* Used to re-render DOM */
        this.props.dispatch({ type: 'FETCH_SNIPPET', payload: this.props.match.params.id });
    }


    render() {
        let selectedValue = String(this.state.snip_ending);
        const { classes } = this.props;
        // console.log('STATE IS CURRENTLY:', this.state)
        return (
            <>
                <Card className={classes.snippet}>
                    <CardActionArea>
                        <Box boxShadow={3}>
                            <CardMedia
                                className={classes.media}
                                image={this.state.snip_path}
                                title={this.props.snippetEdit.snip_description} />
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
                        <Button onClick={this.handleSubmit} className={classes.spicy_submit} variant="contained" color="secondary">
                            Submit Changes
                        </Button>
                        </CardContent>
                    </CardActionArea>
                </Card>

                {this.state.snip_ending === 'false' &&
                <Card className={classes.snippet}>
                <CardContent>
                        <Typography className={classes.cursive} gutterBottom variant="h5" component="h2">
                            Action Manager
                        </Typography>
                        <Typography className={classes.cursive} variant="body2" color="textSecondary" component="div">
                            <label>Action Name: </label>
                            <TextField inputProps={{ maxLength: 50 }} onChange={this.handleChangeAction} multiline placeholder="Insert a new action">
                            </TextField><br /><Button onClick={this.handleClickAction} className={classes.spicy_connection} variant="contained" color="secondary">
                                Add Action
                        </Button>
                        </Typography>
                </CardContent>
                <CardContent>
                    <Typography className={classes.cursive} variant="body2" color="textSecondary" component="div">
                        Current Actions:
                    </Typography>
                    <Divider/>
                </CardContent>
                <CardContent> {/* Conditionally renders if ending is true or false */}
                {this.props.snippetEdit.snip_ending === false && <>
                    {this.props.child.map(child =>
                        <div key={child.id}>
                            {/* DELETE BUTTON */}
                            <Button className={classes.spicy} size="small" variant="contained" color="secondary" onClick={(event) => this.handleClick(child, event)}>{child.action}</Button> <IconButton className={classes.spicy_edit} onClick={(event)=>this.deleteAction(event, child)}><DeleteForeverRoundedIcon /></IconButton><p />
                        </div>

                    )}</>}
                    </CardContent>
                </Card>}
                {/* {this.props.snippetEdit.snip_ending &&
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
    snippetEdit: reduxState.snippetEdit,
    child: reduxState.snippetChild
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(withStyles(styles)(Snippet_Page));