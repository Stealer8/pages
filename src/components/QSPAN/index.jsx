import React, { Component } from 'react'
import '../../pages/Page3/index.css'
export default class QSPAN extends Component {
    render() {
        return (
            <span className="QSPAN" style={{...this.props.style}}>{this.props.children}</span>
        )
    }
}
