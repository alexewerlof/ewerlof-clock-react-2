import React, { Component } from 'react';

const MONTH_NAMES = [
    ,   // 0
    'Jan', // 1
    'Feb', // 2
    'Mar', // 3
    'Apr', // 4
    'May', // 5
    'Jun', // 6
    'Jul', // 7
    'Aug', // 8
    'Sep', // 9
    'Oct', // 10
    'Nov', // 11
    'Dec', // 12
]

const DAY_NAMES = [
    'Sun', //0
    'Mon', //1
    'Tue', //2
    'Wed', //3
    'Thu', //4
    'Fri', //5
    'Sat', //6
]

export default class Motor extends Component {
    tick() {
        const now = new Date
        const Y = now.getFullYear()
        const M = now.getMonth() + 1
        const MStr = MONTH_NAMES[M]
        const D = now.getDate()
        const WD = now.getDay()
        const WDStr = DAY_NAMES[WD]
        const H = now.getHours()
        const h = ( H % 12) || 12
        const PM = H > 12
        const AM = !PM
        const m = now.getMinutes()
        const s = now.getSeconds()
        const ms = now.getMilliseconds()
        this.setState({
            now,
            Y,
            M,
            MStr,
            D,
            WD,
            WDStr,
            H,
            h,
            PM,
            AM,
            m,
            s,
            ms,
        })
    }

    scheduleNextTick() {
        this.requestId = requestAnimationFrame(() => {
            this.tick()
            this.scheduleNextTick()
        })
    }

    start() {
        this.scheduleNextTick()
    }

    stop() {
        cancelAnimationFrame(this.requestId)
    }

    componentWillMount() {
        this.tick()
    }

    componentDidMount() {
        this.start()
    }

    componentWillUnmount() {
        this.stop();
    }

    render() {
        const { children } = this.props

        const childrenWithProps = React.Children.map(children,
            child => React.cloneElement(child, this.state));

        return <div>{childrenWithProps}</div>
    }
}
