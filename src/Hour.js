import React, { Component } from 'react';

export default class Hour extends Component {

    shouldComponentUpdate(nextProps) {
        return this.props.H !== nextProps.H
    }

    render() {
        return (
        <div>
            this is the Hour! {this.props.H}
        </div>
        );
    }
}