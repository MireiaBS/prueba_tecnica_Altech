import { Link } from "react-router-dom"
import { Clock } from "./Clock"

export const Inicio = () => {

    return (
        <div className="inicioContainer">  
            <Link className="navLinks" to='/home'>Home</Link>
            <Link className="navLinks" to='/profile'>Profile</Link>            
        </div>
    )
}