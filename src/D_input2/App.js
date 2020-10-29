import { Input, InputLabel, TextField } from '@material-ui/core'
import React  from 'react'
import Data from './Data'


const App = ({dataSet,setData}) => {


    const handleChange = (e) => {
        setData({...dataSet,[e.target.name]:e.target.value})
    }
    
    return (
        <div>
            {Data.map((data,index)=>{
                return(
                    <div key={index}>
                        <TextField id="outlined-basic" label={data.placeholder} 
                            variant="outlined"  type={data.type} name={data.name} 
                            value={dataSet[index]} onChange={(e)=>{handleChange(e)}}
                        /><br/><br/>
                    </div>
                )
            })}

        </div>
    )
}

export default App
