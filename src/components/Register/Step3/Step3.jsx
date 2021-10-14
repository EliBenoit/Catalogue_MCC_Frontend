// package
import React from "react";

// component
import { Progress, Button, Divider } from "rsuite";

// style
import "rsuite/dist/rsuite.min.css";
import '../../../shared/style/formStyle.css';
import '../Register.css';

const Step3 = ({redirect}) => {

    return (
    <div className="form success-form">
        <Progress.Line percent={100} className="progress"/>
        <div className="success-message">
            <p>Votre inscription est validé(e) !</p>
            <p>Vous recevrez un mail de confirmation une fois votre compte approuvé.</p>
        </div>
            <Divider/>
            <div className="switch">
                <p>Déjà un compte ?</p>
                <Button  appearance="primary" onClick={redirect}>Se connecter</Button>
            </div>
    </div>
    )
}

export default Step3;