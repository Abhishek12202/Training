import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Router1 extends Component {
    render() {
        return (
            <div>
                <Link to="/">Main page</Link><br/>
                <Link to="/home">Home page</Link><br/>
                <Link to="/home/1">Content page</Link><br/>
            </div>
        )
    }
}
