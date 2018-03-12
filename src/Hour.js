import React, { Component } from 'react';
import { Poly } from './util.js';

export default class Hour extends Component {

    shouldComponentUpdate(nextProps) {
        const C = 3.6e6
        return Math.floor(this.props.now / C) !== Math.floor(nextProps.now / C)
    }

    render() {
        const { width, height, color, time } = this.props
        const poly = new Poly(width, height)
        const { hDeg } = time
        return (
            <g>
            <line
              x1={poly.X(hDeg, -20)}
              y1={poly.Y(hDeg, -20)}
              x2={poly.X(hDeg, 65)}
              y2={poly.Y(hDeg, 65)}
              stroke={color}
              strokeWidth={poly.R(8.3)} />
          </g>
        );
    }
}