import {useState,useEffect} from 'react'

const FetchingData = (url) => {
    const [user, setUSer] = useState(null)

    useEffect(() => {
       const fetchData = async() => {
            const data = await fetch(url);
            const data1 = await data.json();
            setUSer(data1[0]);      
       }
       fetchData();
    },[url])
    return user
}

export default FetchingData
