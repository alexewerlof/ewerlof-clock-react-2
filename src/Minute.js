import React, { Component } from 'react';

export default class Minute extends Component {

    shouldComponentUpdate(nextProps) {
        return this.props.m !== nextProps.m
    }

    render() {
        return (
        <div>
            this is the Minute! {this.props.m}
        </div>
        );
    }
}