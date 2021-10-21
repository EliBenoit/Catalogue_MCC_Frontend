// package
import React, { useState } from "react";
import {  useHistory  } from "react-router";
import { useForm } from "react-hook-form";


// component
import Template from "../../shared/component/Template/Template";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { Progress, Button, Divider } from "rsuite";


// style
import "rsuite/dist/rsuite.min.css";
import './Register.css';


const Register = () => {

    const form = useForm();
    const history = useHistory();

    const [currentStep, setCurrentStep] = useState(1)

    function redirectionToConnexion(){
        const path = `/connexion`;
        history.push(path);
    }

    function onSubmit(data){
        if(currentStep === 1){
            setCurrentStep(2);
        } else if(currentStep === 2){
            setCurrentStep(3)
        } else {
            console.log(data);
        }
    }

    return (
    <Template>
        <div className="form-wrapper">
        
            <form className="form" onSubmit={form.handleSubmit(onSubmit)}>
                {currentStep === 1 && (
                <>
                    <Progress.Line percent={30} status="active" showInfo={false} className="progress"/>
                    <Step1 form={form}/>
                </>)}
                {currentStep === 2 && (
                <>
                    <Progress.Line percent={60} status="active" showInfo={false} className="progress"/>
                    <Step2 form={form}/>
                </>)}
                {currentStep === 3 && (
                <>
                    <Progress.Line percent={100} status="active" showInfo={true} className="progress"/>
                    <Step3 form={form}/>
                </>)}
                {currentStep === 2 && (
                <div className="wrapped-button">
                    <Button onClick={() => setCurrentStep(1)}>Précédent</Button>
                    <Button  appearance="primary" type="submit">S'inscrire</Button>
                </div>
                )}
                {currentStep === 1 && (<Button  appearance="primary" type="submit">Suivant</Button>)}
            </form>
            <Divider/>
            <div className="switch">
                <p>Déjà un compte ?</p>
                <Button  appearance="primary" onClick={redirectionToConnexion}>Se connecter</Button>
            </div>
        </div>
    </Template>
    )
}

export default Register;