import React, { Component } from 'react'
import DisplayNote from './DisplayNote'


export default class LifecycleDemo extends Component {
    
    constructor(){
        super()
        this.state = {
            show: true,
            note: 'hello'
        }
    }
    
    render() {
        return (
            <div>
                <button onClick={()=>this.setState(state => ({show: !state.show}))}>
                    Mount
                </button>
                <button onClick={()=>{this.setState({note: this.state.note+'_ok'})}}>
                    Update value
                </button>
                <br/><br/>
                {this.state.show ? <DisplayNote text={this.state.note}/> : null }

            </div>
        )
    }
}
