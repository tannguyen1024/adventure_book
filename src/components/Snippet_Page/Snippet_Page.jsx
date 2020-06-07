import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comments from '../Comments/Comments.jsx';
import { IconButton, Box, Divider, Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, withStyles, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from '../Style/Style.jsx';
import EditIcon from '@material-ui/icons/Edit';
import LoopIcon from '@material-ui/icons/Loop';
import Speech from 'react-speech';

class Snippet_Page extends Component {
    state = '';

    handleClick = (child, event) => {
        this.props.history.push(`/snippet/${child.child}`);
        window.location.reload();
        this.setState({ page: this.props.match.params.id });
    }

    componentDidMount = () => {
        // console.log('History is', this.props.history);
        console.log('YOU ARE ON SNIPPET:',this.props.match.params);
        this.props.dispatch({ type: 'FETCH_SNIPPET', payload: this.props.match.params.id });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.setState({ id: this.props.match.params.id });
            window.location.reload();
        }
    }
    render() {

        const { classes } = this.props;

        const style = {
            container: {
                width: '100%'
            },
            text: {
                width: '100%',
                display: '',
                color: 'gray',
            },
            play: {
                hover: {
                    backgroundColor: 'rgba(154, 70, 70,0.5)',
                    // boxShadow: '2px 2px 18px black',
                    // fontSize: '50px',
                },
                button: {
                    float: 'right',
                    width: '40',
                    height: '40',
                    cursor: 'pointer',
                    pointerEvents: 'none',
                    fontSize: '15px',
                    outline: 'none',
                    marginRight: '15px',
                    marginTop: '2px',
                    backgroundColor: 'rgba(255, 255, 255, 0)',
                    border: 'rgba(255,255,255,1)',
                    borderRadius: 6,
                    fontFamily: 'Courgette',
                    transition: 'all 0.5s',
                    // boxShadow: '3px 3px 3px'
                }
            },
            stop: {
                hover: {
                    backgroundColor: '#8a2b2b',
                    boxShadow: '2px 2px 18px black',
                },
                button: {
                    float: 'right',
                    width: '60',
                    height: '40',
                    cursor: 'pointer',
                    pointerEvents: 'none',
                    fontSize: '15px',
                    outline: 'none',
                    // marginLeft: '5px',
                    backgroundColor: 'black',
                    border: 'solid px rgba(255,255,255,1)',
                    borderRadius: 5,
                    transition: 'all 0.5s',
                    // boxShadow: '3px 3px 3px'
                }
            },
            pause: {
                hover: {
                    backgroundColor: 'GhostWhite'
                },
                button: {
                    width: '34',
                    height: '34',
                    cursor: 'pointer',
                    pointerEvents: 'none',
                    outline: 'none',
                    backgroundColor: 'Gainsboro',
                    border: 'solid 1px rgba(255,255,255,1)',
                    borderRadius: 6
                }
            },
            resume: {
                hover: {
                    backgroundColor: 'GhostWhite'
                },
                button: {
                    width: '34',
                    height: '34',
                    cursor: 'pointer',
                    pointerEvents: 'none',
                    outline: 'none',
                    backgroundColor: 'Gainsboro',
                    border: 'solid 1px rgba(255,255,255,1)',
                    borderRadius: 6
                }
            }
        };

        return (
            <>
                
                    
                        <Card className={classes.snippet}>
                            <CardActionArea>
                                <Box boxShadow={3}><CardMedia
                                    className={classes.media}
                                    image={this.props.snippet.snip_path}
                                    title={this.props.snippet.snip_description}
                                /></Box>
                                <CardContent>
                                    <Typography className={classes.cursive} gutterBottom variant="h5" component="h2">
                                {this.props.snippet.snip_title} <Speech styles={style} textAsButton={true} displayText="Press for Audio ▶️" text={this.props.snippet.snip_description} voice="Daniel" /> {this.props.user.admin && <IconButton onClick={() => this.props.history.push(`/snippet_edit/${this.props.match.params.id}`)} className={classes.spicy_edit}><EditIcon /></IconButton>}
                                    </Typography>
                            <Typography className={classes.cursive_2} variant="body2" component="p">
                                        {this.props.snippet.snip_description} 
                                    </Typography>
                                    <Typography className={classes.ending}>
                                    {this.props.snippet.snip_ending &&
                                        <>
                                            The End.
                                            <br/>
                                                <IconButton className={classes.spicy_edit} variant="contained" onClick={()=>this.props.history.push('/home')}><LoopIcon /></IconButton>
                                            <br/>
                                            Restart?
                                            </>
                                        }</Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                {this.props.snippet.snip_ending === false && <>
                                {this.props.child.map(child =>
                                    <div key={child.id}>
                                        <Button className={classes.spicy} size="small" variant="contained" color="secondary" onClick={(event) => this.handleClick(child, event)}>{child.action}</Button><p />
                                    </div>
                                )}</>}
                            </CardActions>

                            <CardActions>
                                {/* {this.props.user.admin && <Button variant="contained" color="secondary" className={classes.spicy_edit}><EditIcon/></Button>} */}
                            </CardActions>

                        </Card>

                        {this.props.snippet.snip_ending &&
                            <> <br /><Divider /><br /><Comments id={this.props.match.params.id}/> </>}

                    
                
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