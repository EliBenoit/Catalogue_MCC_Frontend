// package
import React from "react";

// component
import { Progress, Form, Button, Divider } from "rsuite";

// style
import "rsuite/dist/rsuite.min.css";
import '../../../shared/style/formStyle.css';
import '../Register.css';

const Step1 = ({next, redirect}) => {
    return (
    <div className="form">
        <Progress.Line percent={30} status="active" showInfo={false} className="progress"/>
        <Form>
                <div className="input-inline">
                    <Form.Group controlId="lastName">
                        <Form.ControlLabel>Nom</Form.ControlLabel>
                        <Form.Control name="lastName" type="text" />
                    </Form.Group>
                    <Form.Group controlId="firstName" >
                        <Form.ControlLabel>Prénom</Form.ControlLabel>
                        <Form.Control name="firstName" type="text" autoComplete="off" />
                    </Form.Group>
                </div>
                <Form.Group controlId="birthDate">
                    <Form.ControlLabel>Date de naissance</Form.ControlLabel>
                    <Form.Control name="birthDate" type="date" />
                </Form.Group>
                <Form.Group controlId="adress" >
                    <Form.ControlLabel>Adresse postal</Form.ControlLabel>
                    <Form.Control name="adress" type="text" autoComplete="off" />
                </Form.Group>
                <div className="input-inline">
                    <Form.Group controlId="postalCode">
                        <Form.ControlLabel>Code Postal</Form.ControlLabel>
                        <Form.Control name="postalCode" type="text" />
                    </Form.Group>
                    <Form.Group controlId="city" >
                        <Form.ControlLabel>Ville</Form.ControlLabel>
                        <Form.Control name="city" type="text" autoComplete="off" />
                    </Form.Group>
                </div>
                <Form.Group>
                    <Button appearance="primary" className="button" onClick={next}>Suivant</Button>
                </Form.Group>
            </Form>
            <Divider/>
            <div className="switch">
                <p>Déjà un compte ?</p>
                <Button  appearance="primary" onClick={redirect}>Se connecter</Button>
            </div>
    </div>
    )
}

export default Step1;