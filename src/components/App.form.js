import React, { Component } from 'react'
import './Config'
import * as firebase from 'firebase'


export default class Frbs extends Component {

    constructor(){
        super()
        this.state = {
            name: "",
            age: "",
            data: []
        }
    }

    componentDidMount(){
        firebase.database().ref("users").once("value").then(snapShot => {
            snapShot.forEach(item =>{
                this.state.data.push({id: item.key,name: item.val().name,age: item.val().age})
            }) 
        })
    }

    submit = (e) => {
        e.preventDefault();
        firebase.database()
        .ref('users')
        .push({name: this.state.name,age: this.state.age})
    }

    render() {
        return (
            <div>
                {console.log(this.state)}
                <form onSubmit={this.submit}>
                    <input type="text" placeholder="Enter name" onChange={e=>this.setState({name: e.target.value})}/>
                    <input type="text" placeholder="Enter Age" onChange={e=>this.setState({age: e.target.value})}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
