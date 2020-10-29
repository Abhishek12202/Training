import React from 'react'
import DynamicForm from './DynamicForm'

const App = () => {

    const onsubmit = (modal) =>{
        alert(JSON.stringify(modal))
    }

    return (
        <div>
            <DynamicForm 
                title = "Registration"
                modal = {[  {key:"name",label:"Name",props:{required:true}},
                            {key:"age",label:"Age",type:"number"},
                            {key:"rating",label:"Rating",type:"number",props:{min:0,max:35}},
                            {key:"qualification",label:"Qualification"}
                        ]}
                onSubmit={(modal)=>{onsubmit(modal)}}
            />
        </div>
    )
}

export default App