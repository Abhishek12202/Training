import React,{createRef} from 'react'
import App2 from './App2';

const App = () => {

    const inputRef = createRef()

    const vijay = () => {
        inputRef.current.style.fontSize = "100px"
    }

    return (
        <div>
            <App2 ref={inputRef}/>
            <button onClick={vijay}>Click Button</button>
        </div>
    )
}
export default App

