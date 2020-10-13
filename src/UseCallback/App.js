import React,{useState,useCallback} from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

const App = () => {

    const [age, setAge] = useState(10)
    const [number, setNumber] = useState(50)

    const incremetAge = useCallback(
        () => {
            setAge(age*2)
        },[age]
    )

    const incremetNumber = useCallback(
        () => {
            setNumber(number+3)
        },[number]
    )
    
    return (
        <div>
            <Title/>
            <Count text="Age of" count={age}/>
            <Button handleClick={incremetAge}>Age</Button>
            <Count text="Number of" count={number}/>
            <Button handleClick={incremetNumber}>Number</Button>
        </div>
    )
}

export default App
