import { useState } from "react"

const CounterApp = () => {

    const [counter, setCounter] = useState(10)

    return (
        <>
            <h1>Counter: {counter} </h1>

            <hr />

            <button
                onClick={() => setCounter(counter + 1)}
                className="btn btn-primary">
                +1
            </button>
        </>
    )
}

export default CounterApp
