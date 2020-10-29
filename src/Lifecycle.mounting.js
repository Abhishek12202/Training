import React, { Component } from 'react'

export default class Lifecycles extends Component {
    
    constructor(){
        super();
        console.log("Constructor calling")
        this.state = {
            name: 'ak',
            age: '11'
        }
    }
    
    componentDidMount(){
        console.log("ComponentDidMount");
    }
    
    render() {
        console.log("Render call")
        return (
            <div>
                <h1>Welcome</h1>
                <h2>{this.state.name}</h2>
            </div>
        )
    }
}
