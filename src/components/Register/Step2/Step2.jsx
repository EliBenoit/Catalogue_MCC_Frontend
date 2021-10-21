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
       <label htmlFor="passeword" >Mot de passe</label>
                <InputForm 
                 name="passeword"
                 type="passeword"
                 placeholder="Saisissez votre mot de passe"
                 form={form}
                 registerOptions={{
                   required: 'Le mot de passe est requise.'}}
                />
                <label htmlFor="confirmPasseword" >Confirmer le mot de passe</label>
                <InputForm 
                 name="confirmPasseword"
                 type="passeword"
                 placeholder="Saisissez votre mot de passe"
                 form={form}
                 registerOptions={{
                   required: 'Le mot de passe est requise.'}}
                />
        </div>
    </>
    )
}

export default Step2;