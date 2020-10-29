import React,{useState,useEffect} from 'react'

export default function DemoHooks() {

    const [user, setUser] = useState(null)
    const [searchQuery, setSearchQuery] = useState("Bret")

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }

    useEffect(() => {
        const fetchData = async() =>{
            const responce = await fetch(`https://jsonplaceholder.typicode.com/users/?username=${searchQuery}`)
            const resJson = await responce.json();
            setUser(resJson[0])
        }
        fetchData();
    },[searchQuery])


    return (
        <div>
            <h1>Search the item</h1>

            <input type="text" placeholder="Enter name here" value={searchQuery} onChange={handleChange}/><br/>
            {user?(
                    <div><h4>
                        {user.name}
                    </h4></div>
                )
                :(
                    <div><h4>User not found</h4></div>
                )
            }
        </div>
    )
}
