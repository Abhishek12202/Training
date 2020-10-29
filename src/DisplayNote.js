import React, { Component } from 'react'

export default class DisplayNote extends Component {
    
    constructor(){
        super();
        console.log("constructor calling")
    }

    componentDidMount(){
        console.log("componentDidMount")
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate calling")
        return true;
    }


    componentWillUnmount(){
        console.log("compent will unmount")
    }
    
    render() {
        console.log('Render calling')
        return (
            <div>
                {this.props.text}
            </div>
        )
    }
}
