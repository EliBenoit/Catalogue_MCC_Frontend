// package
import React from "react";

// component
import InputForm from "../../../shared/component/InputForm";

// style
import "rsuite/dist/rsuite.min.css";
import '../../../shared/style/formStyle.css';
import '../Register.css';

const Step2 = ({form}) => {

    return (
    <>
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
                <label htmlFor="confirmPassword" >Confirmer le mot de passe</label>
                <InputForm 
                 name="confirmPassword"
                 type="password"
                 placeholder="Saisissez votre mot de passe à nouveau"
                 form={form}
                 registerOptions={{
                   required: 'La confirmation du mot de passe est requise.',
                   validate: (value) => {
                    if (value === form.getValues('password')) {
                      return true;
                    }
                    return 'Les mots de passe ne correspondent pas.';
                  },
                  }}
                />
        </div>
    </>
    )
}

export default Step2;