import React from 'react'
import SuperRow from './SuperRow'

const StudentList = ({studentData}) => {        
    return(
        <div>
            {studentData.map(item=>{
                return(
                    <SuperRow key={item.id} row={item}/>
                )
            })}
        </div>
    )
}

export default StudentList