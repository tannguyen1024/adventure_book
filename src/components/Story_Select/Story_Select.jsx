import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Snippet from '../Snippet_Begin/Snippet_Begin.jsx';
import { Button } from '@material-ui/core'

class Story_Select extends Component {
    componentDidMount() {
        /* Send Axios Command to receive first Snippet */
        this.props.dispatch({ type: 'FETCH_FIRST_SNIPPET', payload: this.props.match.params.id })
    }

    render() {
        return (
            <>
                {this.props.snippet.map(snippet =>
                    <ul key={snippet.snippet_id}>
                        <li>{snippet.snip_title}</li>
                        <li><img src={snippet.snip_path} alt={snippet.snip_description} width="200"></img></li>
                        <li>{snippet.snip_description}</li>
                    </ul>
                )}

                <h4>Choose Your Next Action Wisely</h4>
                {this.props.child.map(child =>
                    <div key={child.id}>
                        <Button variant="contained" color="secondary" onClick={() => { this.props.history.push(`/snippet/${child.child}`) }}>{child.action}</Button><p/>
                    </div>
                )}
            </>
        )
    }
}

const mapStateToProps = reduxState => ({
    story: reduxState.story,
    user: reduxState.user,
    snippet: reduxState.currentStory,
    child: reduxState.firstSnippetChild
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Story_Select);