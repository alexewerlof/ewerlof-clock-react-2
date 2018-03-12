import React, { Component } from 'react';
import { Poly } from './util.js';

export default class Second extends Component {

    shouldComponentUpdate(nextProps) {
        return Math.floor(this.props.now / 1000) !== Math.floor(nextProps.now / 1000)
    }

    render() {
        const { width, height, time, color } = this.props
        const poly = new Poly(width, height)
        const { sDeg } = time

        return (
            <g>
            <line
              x1={poly.X(sDeg, -20)}
              y1={poly.Y(sDeg, -20)}
              x2={poly.X(sDeg, 60)}
              y2={poly.Y(sDeg, 60)}
              stroke={color}
              strokeWidth={poly.R(2)} />
            <circle
              cx={poly.X(sDeg, 63)}
              cy={poly.Y(sDeg, 63)}
              r={poly.R(8)}
              fill={color} />
            <circle
              cx={poly.cx}
              cy={poly.cy}
              r={poly.R(5)}
              fill={color} />
          </g>
        );
    }
}