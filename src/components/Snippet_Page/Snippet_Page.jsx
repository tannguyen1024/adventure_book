import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comments from '../Comments/Comments.jsx';
import { IconButton, Box, Divider, Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, withStyles, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from '../Style/Style.jsx';
import EditIcon from '@material-ui/icons/Edit';
import LoopIcon from '@material-ui/icons/Loop';

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
                                        {this.props.snippet.snip_title} {this.props.user.admin && <IconButton onClick={() => this.props.history.push(`/snippet_edit/${this.props.match.params.id}`)} className={classes.spicy_edit}><EditIcon /></IconButton>}
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