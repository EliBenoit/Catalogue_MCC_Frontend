// package
import React, { useState } from "react";
import {  useHistory  } from "react-router";

// component
import Template from "../../shared/component/Template/Template";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

// style
import "rsuite/dist/rsuite.min.css";
import './Register.css';


const Register = () => {

    const [currentStep, setCurrentStep] = useState(1)

    function nextStep(){
        setCurrentStep(currentStep + 1)
    }

    function previousStep(){
        setCurrentStep(currentStep - 1)
    }
    
    const history = useHistory();

    function redirectionToConnexion(){
        const path = `/connexion`;
        history.push(path);
    }

    return (
    <Template>
        {currentStep === 1 && (<Step1 next={nextStep} redirect={redirectionToConnexion}/>)}
        {currentStep === 2 && (<Step2 next={nextStep} previous={previousStep} redirect={redirectionToConnexion}/>)}
        {currentStep === 3 && (<Step3 redirect={redirectionToConnexion}/>)}
    </Template>
    )
}

export default Register;