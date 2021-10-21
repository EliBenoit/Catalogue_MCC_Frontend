// package
import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

// actions
import { loggedOut } from '../../../Reducers/userReducer';


// component

// style
import './Navigation.css';

const Navigation = () => {
    const dispatch = useDispatch();

    const isConnected = useSelector((state) => state.user.isConnected);
    const role = null

    function logOut(){
        dispatch({type: `${loggedOut}`})
    }

    return(
    <div className='navigation'>
        <Link to='/'>Catalogue</Link>
        { (isConnected && (role === "employee")) && (
                 <Link to='/tableau-de-bord'>Tableau de bord</Link>
        )}
       { isConnected && (
            <>
                <Link to='/mon-compte'>Mon compte</Link>
                <Link to='/' onClick={logOut}>Déconnexion</Link>
            </>
        )}
        {!isConnected && (<Link to='/connexion'>Connexion</Link>)}
    </div>
    )
}

export default Navigation;