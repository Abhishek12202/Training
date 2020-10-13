import React, { Component } from 'react'
import {signInWithGoogle} from '../firebase/firebase.utils'

export default class MainPage extends Component {
    
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
 
    handleChange = (e) => {
        const {value,name} = e.target;
        this.setState({[name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target)
    }

    render() {
        return (
            <div className="signin">
                <h2>I have already account</h2>
                <span>Sign in with your email and password</span><br/><br/>

                <form onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input name="email" type="email"  onChange={this.handleChange} 
                        value={this.state.email} required 
                    /><br/>
                    <label>Password</label>
                    <input name="password" type="password" onChange={this.handleChange} autoComplete="on" value={this.state.password} required />
                        <br/>
                    <input type="submit" value="Submit"/>
                    <button onClick={signInWithGoogle}>Signin with google</button>
                </form>
            </div>
        )
    }
}
