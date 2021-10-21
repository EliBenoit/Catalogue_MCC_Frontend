// package
import React from "react";

// component
import InputForm from "../../../shared/component/InputForm";

// style
import "rsuite/dist/rsuite.min.css";
import '../../../shared/style/formStyle.css';
import '../Register.css';

const Step1 = ({form}) => {
    return (
    <>
                <div className="input-label">
                <label htmlFor="nom" >Nom</label>
                <InputForm 
                 name="nom"
                 type="text"
                 placeholder="Saisissez votre nom"
                 form={form}
                 registerOptions={{
                   required: 'Le nom est requis.',
                 }}
                />
                </div>
                <div className="input-label">
                <label htmlFor="prenom" >Prénom</label>
                <InputForm 
                 name="prenom"
                 type="text"
                 placeholder="Saisissez votre prénom"
                 form={form}
                 registerOptions={{
                   required: 'Le prénom est requis.'}}
                />
                </div>
                <div className="input-label">
                <label htmlFor="birthdate" >Date de naissance</label>
                <InputForm 
                 name="birthdate"
                 type="date"
                 placeholder="Saisissez votre date de naissance"
                 form={form}
                 registerOptions={{
                   required: 'La date de naissance est requise.'}}
                />
                </div>
                <div className="input-label">
                <label htmlFor="adress" >Adresse</label>
                <InputForm 
                 name="adress"
                 type="text"
                 placeholder="Saisissez votre adresse postale"
                 form={form}
                 registerOptions={{
                   required: 'Votre adresse est requise.'}}
                />
                </div>
                <div className="input-label">
                <label htmlFor="postalCode" >Code postal</label>
                <InputForm 
                 name="postalCode"
                 type="text"
                 placeholder="Saisissez votre code postale"
                 form={form}
                 registerOptions={{
                   required: 'Le code postal est requis.',
                 }}
                />
                </div>
                <div className="input-label">
                <label htmlFor="city" >Ville</label>
                <InputForm 
                 name="city"
                 type="text"
                 placeholder="Saisissez votre ville"
                 form={form}
                 registerOptions={{
                   required: 'La ville est requise.'}}
                />
                </div>
    </>
    )
}

export default Step1;