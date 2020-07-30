import React, { Component } from 'react'
import Dashboard from '../dashboard/Dashboardvp'
import DashboardT from '../dashboard/DashboardT'

export class Layout extends Component {
    render() {
        return (
            <div >
                <Dashboard />
                { this.props.children }
            </div>
        )
    }
}



export default Layout
