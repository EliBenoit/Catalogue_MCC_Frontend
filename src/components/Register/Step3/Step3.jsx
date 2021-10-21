// package
import React from "react";

// style
import "rsuite/dist/rsuite.min.css";
import '../../../shared/style/formStyle.css';
import '../Register.css';

const Step3 = () => {

    return (
    <div className="form success-form">
        <div className="success-message">
            <p>Votre inscription est validé(e) !</p>
            <p>Vous recevrez un mail de confirmation une fois votre compte approuvé.</p>
        </div>
    </div>
    )
}

export default Step3;