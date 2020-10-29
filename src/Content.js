import React, { Component } from 'react'
export default class Content extends Component {
 
    state = {
        num: 55
    }
        
 
    render() {
        return (
            <div>
                <button onClick={()=>this.props.nam(this.state.num)}>press here</button>
            </div>
        )
    }
}
