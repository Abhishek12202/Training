import React from 'react'

const WithData = (WrappedComponent,UrlData) => {

     class WithData extends React.Component {

        constructor(props){
            super(props);
            this.state = {
                user: []
            }
        }
        
        componentDidMount(){
            fetch(UrlData)
            .then(responce => responce.json())
            .then(data => this.setState({user: data.slice(0,2)}))
        }
        
        render() {
           return( 
                    <WrappedComponent data={this.state.user} {...this.props}/>
                )
        }
    }
    return WithData;
}

export default WithData;