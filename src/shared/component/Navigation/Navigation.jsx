// package
import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

// actions
import { loggedOut } from '../../../Reducers/userReducer';

// style
import './Navigation.css';

const Navigation = () => {
    const dispatch = useDispatch();

    const isConnected = useSelector((state) => state.user.isConnected);
    const isValidate = useSelector((state) => state.user.isValidate);

    const role = useSelector((state) => state.user.role);

    function logOut(){
        /**
         * 
         * When logout, we need to clean token inside local storage.
         * 
         */
        dispatch({type: `${loggedOut}`})
    }

    return(
    <div className='navigation'>
        <Link to='/'>Catalogue</Link>
        { (isConnected && (role === "employee") && isValidate) && (
                 <Link to='/tableau-de-bord'>Tableau de bord</Link>
        )}
       { (isConnected && isValidate) && (
            <>
                <Link to='/mon-compte'>Mon compte</Link>
                <Link to='/' onClick={logOut}>Déconnexion</Link>
            </>
        )}
        {(!isConnected || !isValidate) && (<Link to='/connexion'>Connexion</Link>)}
    </div>
    )
}

export default Navigation;