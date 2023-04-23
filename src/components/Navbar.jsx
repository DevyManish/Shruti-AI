import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = (props) => {
    return (
        <>
            <nav className="sticky top-0 left-0 right-0 z-10 flex bg-white items-center p-3 border-b border-gray-300">
                <img
                    className="object-cover w-10 h-10 rounded-full"
                    src={props.logo}
                    alt="username"
                />
                <span className="block ml-2 font-bold text-gray-600">
                    <Link to="/chatbot">{props.name}</Link>
                </span>
                <span className="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3"></span>
            </nav>
        </>
    )
}

export default Navbar
