import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardActionArea, CardMedia, CardContent, Typography, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from '../Style/Style';

class Story_Select extends Component {
    componentDidMount() {
        /* Send Axios Command to receive first Snippet */
        this.props.dispatch({ type: 'FETCH_FIRST_SNIPPET', payload: this.props.match.params.id });
        setTimeout(() => this.props.history.push(`/snippet/${this.props.snippet[0].snippet_id}`), 3000);
    }

    render() {
        const { classes } = this.props;
        return (
            <>
                <Card className={classes.card_loading}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media_loading}
                            image="/../../dragon_loading.gif"
                            title="Loading..."/>
                        <CardContent>
                            <Typography className={classes.cursive} gutterBottom variant="h5" component="h2">
                                Loading Adventure...
                            </Typography>
                           
                        </CardContent>
                    </CardActionArea>
                </Card>
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