import axios from "axios";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from "./Button";
import Search from "./Search";


const Navbar = () => {
    return (
        <nav className="flex items-center justify-around">
            <a href='/'><div className="font-bold text-[25px] hover:text-gray-700 cursor-pointer"> /home</div></a>
            <div className='flex items-center justify-center font-bold gap-10 cursor-pointer'>
                <p>Latest</p>
                <p>About</p>
                <p>Contact</p>
            </div>
            <Search />
            <Link to={'/login'}> <Button name={"LOGIN"} /></Link>
        </nav>
    )
}

export default Navbar