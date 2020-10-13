import React from 'react'
import {Data} from './App'
import {useContext} from 'react'

const App3 = () => {

    const fname = useContext(Data)

    return (
        <div><br/><br/>

            <h3>{fname}</h3>
            <Data.Consumer>
                {(vname)=>{
                    return(
                        <h3>
                            {vname}
                        </h3>
                    )
                }}
            </Data.Consumer>
        </div>
    )
}

export default App3
