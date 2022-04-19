
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <p> Contact App</p>
            <NavLink to={'/login'}>Войти</NavLink>
        </header>
    );
};


export default Header;