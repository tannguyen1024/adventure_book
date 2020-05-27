import React, { Component } from 'react';
import { connect } from 'react-redux';

class Story_Select extends Component {
    render(){
        return(
            <>
                
            </>
        )
    }
}

const mapStateToProps = state => ({
    story: state.story,
    user: state.user
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Story_Select);