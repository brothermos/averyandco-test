import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="flex justify-between items-center px-60 pt-7 mb-0 text-[#cf2027] text-2xl">
            <header className="cursor-pointer  hover:text-black hover:text">
                <a href="/">Natdanai</a>
            </header>

            <ul className="flex gap-10">
                <Link
                    className="cursor-pointer hover:text-black focus:text-black"
                    to="/"
                >
                    Profile
                </Link>
                <Link
                    className="cursor-pointer hover:text-black focus:text-black"
                    to="/education"
                >
                    Education
                </Link>
                <Link
                    className="cursor-pointer hover:text-black focus:text-black"
                    to="/factorial"
                >
                    Factorial
                </Link>
            </ul>
        </nav>
    );
}

export default Navbar;
