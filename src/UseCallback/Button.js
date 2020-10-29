import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button onClick={props.handleClick}>{props.children}</button>
            {console.log(props.children)}            
        </div>
    )
}

export default React.memo(Button)
