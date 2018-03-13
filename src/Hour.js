import React, { Component } from 'react';

export default class Hour extends Component {

    shouldComponentUpdate(nextProps) {
        const C = 3.6e6
        return Math.floor(this.props.now / C) !== Math.floor(nextProps.now / C)
    }

    render() {
        const { color, time: { hDeg }, cPoly } = this.props
        return (
            <g>
            <line
              x1={cPoly.X(hDeg, -20)}
              y1={cPoly.Y(hDeg, -20)}
              x2={cPoly.X(hDeg, 65)}
              y2={cPoly.Y(hDeg, 65)}
              stroke={color}
              strokeWidth={cPoly.R(8.3)} />
          </g>
        );
    }
}