import React, { Component } from 'react'
import Content from './Content'
import AppStyle from './AppStyle'
export default class App extends Component{

  constructor(){
    super();
     this.state = {
      name: 1
    }
  }

  styleHandle = {
    color: "green",
    backgroundColor: "black"
  }

  bk = (n) => {
    this.setState({name: this.state.name + n})
  }

  render(){
    return(
      <div>
        <div style={this.styleHandle}>KEtan</div>
        <AppStyle isActive={false}>Abhishek</AppStyle>
        {this.state.name}
        <Content nam={this.bk}/>
      </div>
    )
  }
}