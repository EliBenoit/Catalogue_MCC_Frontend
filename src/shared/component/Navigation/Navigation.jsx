// package
import React from "react";
import { Link } from "react-router-dom";

// component

// style
import './Navigation.css';

const Navigation = () => {
    return(
    <div className='navigation'>
        <Link to='/'>Catalogue</Link>
        <Link to='/connexion'>Connexion</Link>
    </div>
    )
}

export default Navigation;