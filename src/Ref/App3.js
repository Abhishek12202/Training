import React,{useRef} from 'react'
const App3 = () => {
    const inputRef = useRef()
    const vijay = () => {
        inputRef.current.focus()
    }

    return (
        <div>
            <input ref={inputRef} type="text"/>
            <button onClick={vijay}>dabav</button>
        </div>
    )
}
export default App3
