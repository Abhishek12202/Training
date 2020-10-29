import React from 'react'

const Count = (props) => {
    return (
        <div>
            <h4>{props.text}-{props.count}</h4>    
            {console.log(props.text)}
        </div>
    )
}

export default React.memo(Count)
