import { UserContext } from "./UserContext"

export const user = {
    name: 'Juan',
    age: 25
}

export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={{ hola: 'mundo', user}}>
            { children }
        </UserContext.Provider>
    )
}