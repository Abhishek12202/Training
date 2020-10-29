import React from 'react'

const Title = () => {
    return (
        <div>
            <h3>
                This is Home Page   
                {console.log("Title displayed")}         
            </h3>
        </div>
    )
}

export default React.memo(Title)
