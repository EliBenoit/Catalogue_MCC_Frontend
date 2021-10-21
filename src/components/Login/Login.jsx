// package
import React from "react";
import { useForm } from "react-hook-form";
import {  useHistory  } from "react-router";

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
    const form = useForm()
    const history = useHistory();

    function redirect(){
        const path = `/inscription`;
        history.push(path);
    }

    function onSubmit(data){
        
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
                <label htmlFor="passeword" >Mot de passe</label>
                <InputForm 
                 name="passeword"
                 type="passeword"
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