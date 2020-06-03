import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IconButton, Box, Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, withStyles, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from '../Style/Style';
import EditIcon from '@material-ui/icons/Edit';

class Story_Select extends Component {
    componentDidMount() {
        /* Send Axios Command to receive first Snippet */
        this.props.dispatch({ type: 'FETCH_FIRST_SNIPPET', payload: this.props.match.params.id })
    }

    handleClick = (child, event) => {
        this.props.history.push(`/snippet/${child.child}`);
        window.location.reload();
        this.setState({ page: this.props.match.params.id });
    }

    render() {
        const { classes } = this.props;
        return (
            <>
                {this.props.snippet.map(snippet =>
                    <div key={snippet.snippet_id}><Card className={classes.snippet}>
                        <CardActionArea>
                            <Box boxShadow={3}><CardMedia
                                className={classes.media}
                                image={snippet.snip_path}
                                title={snippet.snip_description}
                            /></Box>
                            <CardContent>
                                <Typography className={classes.cursive} gutterBottom variant="h5" component="h2">
                                    {snippet.snip_title} {this.props.user.admin && <IconButton onClick={() => this.props.history.push(`/snippet_edit/${snippet.snippet_id}`)} className={classes.spicy_edit}><EditIcon /></IconButton>}
                                </Typography>
                                <Typography className={classes.cursive} variant="body2" color="textSecondary" component="p">
                                    {snippet.snip_description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            {this.props.child.map(child =>
                                <div key={child.id}>
                                    <Button className={classes.spicy} variant="outlined" size="small" onClick={() => { this.props.history.push(`/snippet/${child.child}`) }}>{child.action}</Button><p />
                                </div>
                            )}
                        </CardActions>
                    </Card>
                    </div>
                )}
            </>
        )
    }
}

Story_Select.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = reduxState => ({
    story: reduxState.story,
    user: reduxState.user,
    snippet: reduxState.firstSnippet,
    child: reduxState.firstSnippetChild
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(withStyles(styles)(Story_Select));