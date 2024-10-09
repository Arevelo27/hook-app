import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();

    const onInputFocus = () => {
        // document.querySelector('input').focus()
        // console.log(inputRef)
        inputRef.current.focus()
    }

    return (
        <>
            <h1>Focus Screen</h1>

            <hr />

            <input
                ref={ inputRef }
                type="text"
                className="form-control"
                placeholder="Su nombre"
                name="username"
                autoComplete="off"
            />

            <button 
                onClick={ onInputFocus } 
                className="btn btn-outline-primary mt-2">
                Set Focus
            </button>

        </>
    )
}
