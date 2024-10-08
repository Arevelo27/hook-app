import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
    
    const { formState, onInputChange, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    })

    /** 
     * Otra forma de hacerlo
     * const { username, email, password } = formState
     */

    return (
        <>
            <h1>Formulario con custom hook</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="arevelo.edu@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input 
                type="password" 
                className="form-control mt-2" 
                placeholder="Password"
                name="password"
                value={password}
                onChange={onInputChange}                
            />

            {
                (username === 'andres2') && <Message />
            }
        </>
    )
}