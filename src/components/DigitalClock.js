import React,{useState} from 'react'
export default function DigitalClock() {

    function newtiming(){
        var a = new Date(); 
        var b = a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();
        return b;
    }
    
    const [first, setfirst] = useState(newtiming());

    const vijay = () => {
        setfirst(newtiming())
    }

    setInterval(vijay,1000);
    
    return (
        <div>
            {first}
        </div>
    )
}

