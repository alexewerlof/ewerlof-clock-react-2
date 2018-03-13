import React, { Component } from 'react';

export default class Minute extends Component {

    shouldComponentUpdate(nextProps) {
        return Math.floor(this.props.now / 60000) !== Math.floor(nextProps.now / 60000)
    }

    render() {
        const { color, time: { mDeg }, cPoly } = this.props

        return (
            <g>
            <line
                x1={cPoly.X(mDeg, -20)}
                y1={cPoly.Y(mDeg, -20)}
                x2={cPoly.X(mDeg, 95)}
                y2={cPoly.Y(mDeg, 95)}
                stroke={color}
                strokeWidth={cPoly.R(6.25)} />
            </g>
        );
    }
}