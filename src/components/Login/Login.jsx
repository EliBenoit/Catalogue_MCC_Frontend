// package
import React from "react";
import { useForm } from "react-hook-form";
import {  useHistory  } from "react-router";
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';

// actions
import { loggedIn } from '../../Reducers/userReducer.js';

// component
import Template from "../../shared/component/Template/Template";
import InputForm from "../../shared/component/InputForm";
import { Button, Divider } from 'rsuite';

// style
import "rsuite/dist/rsuite.min.css";
import '../../shared/style/formStyle.css';

// fakeData
import fakeUser from '../../assets/fakeData/fakeUser.json'

const Login = () => {
    const form = useForm();
    const dispatch = useDispatch();
    const history = useHistory();

    function redirect(){
        const path = `/inscription`;
        history.push(path);
    }

    function onSubmit(data){
        /**
         * 
         * If back function naromaly, we need to call API authentification with the data props. 
         * Data props is an object with email and passeword information. 
         * If back respond with a valid token, we stock it in local storage the token to keep it in header request. 
         * After, we push the user profil inside the store to keep the information. 
         * 
         * Here I just push a fake user data. 
         * To test different option, you can change employee to reader inside the role propriety,
         * and you will be able to see the reader pages. 
         * 
         *  */ 
      dispatch({
            type: `${loggedIn}`,
            payload: { profile: fakeUser },
          });

          const path = `/`;
          history.push(path);

          if(!fakeUser.isValidate){
            toast.error('Votre compte n\est pas encore validé. Vous ne pouvez pas vous connecter')
          }
    }

    return (
    <Template>
        <div className="form-wrapper">
            <form className="form" onSubmit={form.handleSubmit(onSubmit)}>
             <div className="input-label">
             <label htmlFor="email" >Adresse email</label>
                <InputForm 
                 name="email"
                 type="email"
                 placeholder="Saisissez votre adresse e-mail"
                 form={form}
                 registerOptions={{
                   required: 'L\'adresse e-mail est requise.',
                   pattern: {
                     value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm,
                     message: 'Veuillez saisir une adresse e-mail valide.',
                   },
                 }}
                />
                </div>
                <div className="input-label">
                <label htmlFor="password" >Mot de passe</label>
                <InputForm 
                 name="password"
                 type="password"
                 placeholder="Saisissez votre mot de passe"
                 form={form}
                 registerOptions={{
                   required: 'Le mot de passe est requise.'}}
                />
                </div>
         <Button  appearance="primary" type="submit">Se connecter</Button>
            </form>
            <Divider/>
            <div className="switch">
                <p>Pas encore de compte ?</p>
                <Button  appearance="primary" onClick={redirect}>S'enregistrer</Button>
            </div>
        </div>
    </Template>
    )
}

export default Login;