import React from 'react'
import { useState, useEffect } from 'react'
import { Inicio } from "./Inicio"
import { Clock } from "./Clock"
import { UserList } from './UserList'

export const Header = () => {

    const [count, setCount] = useState(0)

    const changeCounter = () => {
        let sumCount = count + 1
        setCount(sumCount)
    }

    return (
        <>  
            <Inicio></Inicio>
            <div className="childContainer">
                <h1>My React App</h1>
                <p>{count}</p>
                <button onClick={changeCounter}>Click!</button>
                <Clock></Clock>
                <UserList></UserList>
            </div>
        </>
    )
    
}