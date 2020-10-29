import React, { Component } from 'react'
import StudentList from './StudentList'
import getData from './Data'

const withconatiner = () => {
    return class App extends Component {

        state = {
            studentData:[]
        }   

        componentDidMount(){
            const data = getData()
            this.setState({studentData: data})
        }

        render() {
            return (
                <StudentList studentData={this.state.studentData}/>
            )
        }
    }
}

export default withconatiner(StudentList)