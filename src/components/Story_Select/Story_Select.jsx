import React, { Component } from 'react';
import { connect } from 'react-redux';
import Snippet from '../Snippet_Begin/Snippet_Begin.jsx';

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
            </>
        )
    }
}

const mapStateToProps = state => ({
    story: state.story,
    user: state.user,
    snippet: state.currentStory
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Story_Select);