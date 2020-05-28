import React, { Component } from 'react';

class Snippet_Page extends Component {
    render(){
        return(
            <>
                <h1>{this.props.match.params.id}</h1>
            </>
        )
    }
}

export default Snippet_Page;