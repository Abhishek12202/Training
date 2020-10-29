import React, { forwardRef } from 'react'

const App2 = forwardRef((props,ref) => {
    return (
        <div>
            <input ref={ref} type="text"/>           
        </div>
    )
}   
)
export default App2
