import React,{Component} from 'react'


const App2 = (WrappedComponent) => {

    return class extends Component {

        constructor(props){
            super(props)
            this.state = {
                user: []
            }
        }
        
        componentDidMount(){
           fetch(`https://jsonplaceholder.typicode.com/users`)
           .then(data => data.json())
           .then(data2=>this.setState({user:data2}))       
        }
            
        render() {
            return(<WrappedComponent data={this.state.user}/>)
        }
    }

}

export default App2
