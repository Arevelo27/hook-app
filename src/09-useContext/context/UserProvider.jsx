import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = { id: 123, name: 'Juan', email: 'j@j.com' }
export const useUser = () => {
    return UserContext
}

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState()

    return (
        // <UserContext.Provider value={{ hola: 'mundo', user}}>
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )
}