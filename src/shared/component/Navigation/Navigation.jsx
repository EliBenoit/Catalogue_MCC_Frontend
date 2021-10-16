// package
import React from "react";
import { Link } from "react-router-dom";

// component

// style
import './Navigation.css';

const Navigation = () => {
    const isConnected = true;
    const userRole = "employee";
    return(
    <div className='navigation'>
        <Link to='/'>Catalogue</Link>
        { (isConnected && (userRole === "employee")) && (
                 <Link to='/tableau-de-bord'>Tableau de bord</Link>
        )}
       { isConnected && (
            <>
                <Link to='/mon-compte'>Mon compte</Link>
                <Link to='/'>Déconnexion</Link>
            </>
        )}
        {!isConnected && (<Link to='/connexion'>Connexion</Link>)}
    </div>
    )
}

export default Navigation;