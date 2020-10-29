import React, { Component } from 'react'

class DynamicForm extends Component{
    onChange = (e,key) =>{
        this.setState({
            [key]:this[key].value
        })
    }

    submitHandle = (e) => {
        e.preventDefault()  
        if(this.props.onSubmit) this.props.onSubmit(this.state)
    }

    renderForm = () => {
        let modal = this.props.modal
        let formUI = modal.map((m)=>{
            let key = m.key;
            let type = m.type || "text";
            let props = m.props || {};
            return(
                <div key={key}>
                    <label>{m.label}</label> 
                    <input {...props} ref={(key)=>{this[m.key]=key}} type={type} key={"i"+m.key}
                        onChange={(e)=>{this.onChange(e,key)}}
                    />
                </div>
            )
        })
        return formUI
    }
    render(){
        return (
            <div>
                <form onSubmit={(e)=>{this.submitHandle(e)}}>
                    {this.renderForm()}
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}

export default DynamicForm
