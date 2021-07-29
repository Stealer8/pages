import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../../pages/Page3/index.css'
export default class MyNavLink extends Component {
    render() {
        return (
            <NavLink  {...this.props}/>
        )
    }
}
