import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import App from './App'

const DynamicInput = () => {

    const [data, setData] = useState({name:'',email:'',mobile:''})

    const submitHandle = (params) => {
       alert(data.name+'   '+data.email)
    }
    
    return (
        <div>
            <App dataSet={data} setData={setData}/>
            <Button variant="contained" color="primary" type="button" onClick={submitHandle}>Submit</Button>
        </div>
    )
}
export default DynamicInput
