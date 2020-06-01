import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comments from '../Comments/Comments.jsx';
import { Box, Divider, Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, withStyles, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from '../Style/Style.jsx';

class Snippet_Page extends Component {
    state = '';

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
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.setState({ id: this.props.match.params.id });
            window.location.reload();
            // this.getData(this.props.match.params.id);
            // or any other logic..
        }
    }
    render() {
        const { classes } = this.props;

        return (
            <>
                {this.props.snippet.map(snippet =>
                    <div key={snippet.id}>
                        <Card className={classes.snippet}>
                            <CardActionArea>
                                <Box boxShadow={3}><CardMedia
                                    className={classes.media}
                                    image={snippet.snip_path}
                                    title={snippet.snip_description}
                                /></Box>
                                <CardContent>
                                    <Typography className={classes.cursive} gutterBottom variant="h5" component="h2">
                                        {snippet.snip_title}
                                    </Typography>
                                    <Typography className={classes.cursive} variant="body2" color="textSecondary" component="p">
                                        {snippet.snip_description} 
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
                            <> <br /><Divider /><br /><Comments id={this.props.match.params.id}/> </>}

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