import React, { Component } from 'react'

export default class Event extends Component {
    
    constructor(){
        super();
        this.state={
            name:"hello",
            age: 12
        }
         this.changeHandle1 = this.changeHandle.bind(this)
    }

    changeHandle(){
        console.log(this)
    }
    ak = () => {
        console.log(this)
    }
    
    render() {
        return (
            <div>
                {this.state.name}
                <button onClick={this.changeHandle1}>Preess here</button>
                <button onClick={this.ak} >Press here</button>
            </div>
        )
    }
}
