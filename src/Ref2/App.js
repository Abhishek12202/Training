import React,{createRef} from 'react'
import App2 from './App2'

const App = () => {

    const inputRef = createRef()

    const vijay = () => {
        inputRef.current.focus()
    }

    return (
        <div>
            <App2 ref={inputRef}/><br/><br/>
            <button onClick={vijay}>Press here</button>

        </div>
    )
}

export default App
