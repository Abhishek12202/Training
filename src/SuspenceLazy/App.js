import React,{Suspense,lazy} from 'react'
const Animal = lazy(()=>import("./Animal"))
const Age = lazy(()=>import("./Age"))
const Detail = lazy(()=>import("./Detail"))

const renderLoader = () => {
    return(
        <h3>Loading</h3>
    )
}

const App = () => {
    return (
        <div>
            <Suspense fallback={renderLoader()}>
                <Animal/>
                <Age/>
                <Detail/>
            </Suspense>
        </div>
    )
}

export default App
