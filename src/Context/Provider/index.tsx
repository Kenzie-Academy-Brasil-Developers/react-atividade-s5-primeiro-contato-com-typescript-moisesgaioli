import { createContext, ReactNode, useState } from "react";

interface UserProviderProps {
    children: ReactNode
}

interface User {
    name: string,
    age: string,
    hobby: string
}

interface ListData {
    list: User[]
    createNewUser: (user: User) => void
}


export const UserContext = createContext<ListData>({} as ListData)

export const UserProvider = ({ children }: UserProviderProps) => {

    
    const [list, setList] = useState<User[]>([])
    const [newUser, setNewUser] = useState<User>({} as User)

    const createNewUser = (user: User) => {
        setList([...list, user])
        setNewUser(user)
    }

    return (
        <UserContext.Provider value={{
            createNewUser,
            list,
        }}>
            {children}
        </UserContext.Provider>
    )
}