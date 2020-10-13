import React, {useState, createContext } from 'react'
import App2 from './App2'
const Data = createContext("dsdd");

const App = () => {

    const [name, setname] = useState("ss")

    return (
        <div>
            <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}/> 
            <Data.Provider value={name}>
                <App2/>
            </Data.Provider>
        </div>
    )
}

export default App
export {Data}