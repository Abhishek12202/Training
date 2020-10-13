import React,{useState,useMemo} from 'react'

const App3 = () => {

    const [numberOne, setnumberOne] = useState(0)
    const [numberTwo, setnumberTwo] = useState(0)

    const oneHandle = () => {
        setnumberOne(numberOne+1)
    }
    

    const secondHandle = () => {
        setnumberTwo(numberTwo+1)
    }
    
    const event = useMemo(() => {        
        let i = 0
        while(i<5000){i++}
        return numberOne%2 === 0}, [numberOne]
    )


    return (
        <div>
            <div>
                <button onClick={oneHandle}>One :-{numberOne}</button>
                <lable>{event?(<div>Even</div>):(<div>Odd</div>)}</lable>
            </div>
            <div>
                <button onClick={secondHandle}>Two :-{numberTwo}</button>
            </div>
        </div>
    )
}

export default App3
