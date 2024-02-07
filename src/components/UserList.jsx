import React from "react";
import { useEffect, useState } from "react";
import usersData from '/public/userList.json'

export const UserList = () => {   
    const [user, setUser] = useState([{
        name : '',
        email: '',
        password: ''
    }])

    useEffect(() => {
        let arrUsers = usersData.map(users =>( {
             name: users.nombre,
             email: users.email,
             password: users.password })
        )

        setUser(arrUsers)
        console.log(arrUsers)

    }, [])

    const addUser = () => {
        let newUser =  prompt('Type the name of new user')

        setUser(prevUsers => [...prevUsers, {name :newUser, email:'', password:''}])
        console.log(user)        
    }

    function rndNumber() {    
        const randomNumber =  Math.floor(Math.random() * 1000) + 1;

        return randomNumber;
    }

    return (
        <>
            <h2>Users List</h2>
            <ul>
                {user.map( e => <li key={rndNumber()}>{e.name}</li>)}                           
            </ul>
            
            <button onClick={addUser}>Add user</button>  
              
        </>
    )
}