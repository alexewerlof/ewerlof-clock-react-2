import React, { Component } from 'react';
import { minute2deg } from './util'

function Indicator({ cPoly, n, color }) {
    const big = n % 5 === 0
    const length = big ? 72 : 88
    const width = big ? 6 : 2
    const rotation = minute2deg(n);

    return <line
      x1={cPoly.X(rotation, length)}
      y1={cPoly.Y(rotation, length)}
      x2={cPoly.X(rotation, 95)}
      y2={cPoly.Y(rotation, 95)}
      stroke={color}
      strokeWidth={cPoly.R(width)} />
}

export default class Face extends Component {

    shouldComponentUpdate() {
        return false
    }

    render() {

        const indicators = []
        for (let i = 0; i < 60; i++) {
            indicators.push(<Indicator key={i} n={i} {...this.props} color={this.props.indicatorColor}/>)
        }
        return <g>{indicators}</g>
    }
}
