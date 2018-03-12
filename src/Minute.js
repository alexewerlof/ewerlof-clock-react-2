import React, { Component } from 'react';
import { Poly } from './util.js';

export default class Minute extends Component {

    shouldComponentUpdate(nextProps) {
        return Math.floor(this.props.now / 60000) !== Math.floor(nextProps.now / 60000)
    }

    render() {
        const { width, height, color, time } = this.props
        const poly = new Poly(width, height)
        const { mDeg } = time

        return (
            <g>
            <line
                x1={poly.X(mDeg, -20)}
                y1={poly.Y(mDeg, -20)}
                x2={poly.X(mDeg, 95)}
                y2={poly.Y(mDeg, 95)}
                stroke={color}
                strokeWidth={poly.R(6.25)} />
            </g>
        );
    }
}