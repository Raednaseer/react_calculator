import React from 'react'
import { Link } from 'react-router-dom';


function Header() {
    return (
        <nav className="text-white p-4 flex justify-between items-center">
            <h1 className="text-2xl">Calculator</h1>
            <div className="space-x-4">
                <a href="#" className="hover:underline">Home</a>
                <a href="#" className="hover:underline">About</a>
                <a href="#" className="hover:underline">Contact</a>
            </div>
        </nav>
    )
}


export default Header
