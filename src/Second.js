import React, { Component } from 'react';

export default class Second extends Component {

    shouldComponentUpdate(nextProps) {
        return Math.floor(this.props.now / 1000) !== Math.floor(nextProps.now / 1000)
    }

    render() {
        const { time: { sDeg }, color, cPoly } = this.props

        return (
            <g>
            <line
              x1={cPoly.X(sDeg, -20)}
              y1={cPoly.Y(sDeg, -20)}
              x2={cPoly.X(sDeg, 60)}
              y2={cPoly.Y(sDeg, 60)}
              stroke={color}
              strokeWidth={cPoly.R(2)} />
            <circle
              cx={cPoly.X(sDeg, 63)}
              cy={cPoly.Y(sDeg, 63)}
              r={cPoly.R(8)}
              fill={color} />
            <circle
              cx={cPoly.cx}
              cy={cPoly.cy}
              r={cPoly.R(5)}
              fill={color} />
          </g>
        );
    }
}