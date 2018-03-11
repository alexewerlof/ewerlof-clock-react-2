import React, { Component } from 'react';

export default class Second extends Component {

    shouldComponentUpdate(nextProps) {
        return this.props.s !== nextProps.s
    }

    render() {
        return (
        <div>
            this is the second! {this.props.s}
        </div>
        );
    }
}