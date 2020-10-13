import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Router1 from './App.link'

const Mainpage = (props) => {
    return(
        <div>
            <h1>
                hello world
            </h1>
        </div>
)}

const Homepage = (props) => {
    return(
    <div><h1>
        this is home
    </h1></div>
)}

const Contentpage = (props) => {
    console.log(props)
    console.log(props)
    return(
        <div><h1>
            welcome to content-page
            </h1>
        </div>
    )
}

export default class Router extends Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Router1/>
                    <br/>
                    <Switch>
                        <Route path="/home/:ID" component={Contentpage}/>
                        <Route path="/home" component={Homepage}/>
                        <Route path="/" component={Mainpage}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
