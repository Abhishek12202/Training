import React, { useState } from 'react'

export default function DemoHooks1() {

    const [name, setname] = useState({email: "abhi",age: "2"})
    const {age,email} = name;


    return (
        <div>
            {email}<br/>
            {age}<br/>
            <button onClick={()=>{setname({email:"ke",age:"23"})}}>Press here</button>
        </div>
    )
}
  