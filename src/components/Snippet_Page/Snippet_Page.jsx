import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comments from '../Comments/Comments.jsx';
import { Button } from '@material-ui/core'

class Snippet_Page extends Component {

    handleClick = (child, event) => {
        this.props.history.push(`/snippet/${child.child}`)
        window.location.reload();
    }

    componentDidMount = () => {
        console.log('History is',this.props.history)
        console.log(this.props.match.params.id)
        this.props.dispatch({ type: 'FETCH_SNIPPET', payload: this.props.match.params.id })
    }
    render(){
        return(
            <>
                {this.props.snippet.map(snippet => 
                    <div key={snippet.id}>
                    <ul>
                        <li>{snippet.snip_title}</li>
                        <li><img src={snippet.snip_path} alt={snippet.snip_description} width="200"></img></li>
                        <li>{snippet.snip_description}</li>
                    </ul>

                    { snippet.snip_ending && 
                    <> <h3>The End</h3>
                    <Comments /> </>}

                    {snippet.snip_ending === false && 
                        <>
                        <h4>Choose Your Next Action Wisely</h4>
                        {this.props.child.map(child =>
                            <div key={child.id}>
                                <Button variant="contained" color="secondary" onClick={(event) => this.handleClick (child, event)}>{child.action}</Button><p />
                            </div>
                            
                            )}
                            </>
                    }

                    </div>
                )}
            </>
        )
    }
}

const mapStateToProps = reduxState => ({
    story: reduxState.story,
    user: reduxState.user,
    snippet: reduxState.snippet,
    child: reduxState.snippetChild
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Snippet_Page);