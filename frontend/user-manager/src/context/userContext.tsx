import React, {createContext, useState} from 'react'
import {ReactElement} from 'react'
import { User } from '../types/userType.ts'


interface contextType{
    users:Array<User>,
    addUsers:(user:User[]) => void
}

export const userContext = createContext({} as contextType);

interface userProviderProps {
    children: React.ReactNode
}

export const UserProvider = ({children}:userProviderProps):ReactElement => {

    const[users,setUsers] = useState<Array<User>>([]);

    const addUsers = (user:User[]) => {
        setUsers(user);
    }
 
    return(
        <userContext.Provider value={{users:users,addUsers:addUsers}}>
            {children}
        </userContext.Provider>
    )
}

