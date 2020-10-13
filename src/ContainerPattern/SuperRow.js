import React from 'react'

const SuperRow = ({row}) => {

    return(
        <div>
            {row.id}&nbsp;
            {row.name}&nbsp;&nbsp;
            {row.email}&nbsp;
        </div>
    )
}

export default SuperRow