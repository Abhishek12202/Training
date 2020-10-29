import React, { Component } from 'react'

export default class LifecyclesUp extends Component {
    
    constructor(){
        super();
        this.state = {
            books: 1
        }
    }

    componentDidUpdate(){
        console.log("componenDidUpdate call")
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate call")
        return true;
    }

    handleChange = () => {
        this.setState({books: this.state.books+2})
    }
    
    render() {
        console.log("render call")
        return (
            <div>
                {this.state.books}
                <button onClick={this.handleChange}>Press here</button>
            </div>
        )
    }
}
