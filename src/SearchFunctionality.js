import React,{useState} from 'react'

const SearchFunctionality = () => {

    const [search, setSearch] = useState("");
    
    let abc  = [
        {name:"hello",email:"abhi@gmail.com",phone:"123"},{name:"milan",email:"rupesh@gmail.com",phone:"3333"},{name:"Jaypal",email:"krisha@gmail.com",phone:"5345"}
    ]
    const [finalData, setFinalData] = useState(abc);

    const handleChange = (e) => {
        setSearch(e.target.value)
        let midData =  abc.filter((data)=>{
           return (data.name).includes(e.target.value) || data.email.includes(e.target.value)
        })
        setFinalData(midData)
    }

    return (
        <div>
            <input type="text" value={search} onChange={handleChange}/>
            {
                finalData?
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                finalData.map((data,index)=>{
                                    return <tr key={index}>
                                                <td>{data.name}</td>
                                                <td>{data.email}</td>
                                                <td>{data.phone}</td>
                                            </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
                :<div>No data found</div>
            }
        </div>
    )
}

export default SearchFunctionality
