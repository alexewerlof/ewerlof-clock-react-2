import React, { Component } from 'react';

export default class Face extends Component {

    shouldComponentUpdate() {
        return false
    }

    render() {
        return (
        <div>
            this is the face! {this.props.ms}
        </div>
        );
    }
}
