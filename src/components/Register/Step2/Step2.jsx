// package
import React from "react";

// component
import { Progress, Form, Button, Divider } from "rsuite";

// style
import "rsuite/dist/rsuite.min.css";
import '../../../shared/style/formStyle.css';
import '../Register.css';

const Step2 = ({next, previous, redirect}) => {

    return (
    <div className="form">
        <Progress.Line percent={60} status="active" showInfo={false} className="progress"/>
        <Form>
                <Form.Group controlId="password" >
                    <Form.ControlLabel>Mot de passe</Form.ControlLabel>
                    <Form.Control name="password" type="password" autoComplete="off" />
                </Form.Group>
                <Form.Group controlId="confirmPassword" >
                    <Form.ControlLabel>Confirmer le mot de passe</Form.ControlLabel>
                    <Form.Control name="confirmPassword" type="password" autoComplete="off" />
                </Form.Group>
                <Form.Group className="wrapped-button">
                    <Button onClick={previous} className="button">Précédent</Button>
                    <Button appearance="primary" className="button" onClick={next}>S'inscrire</Button>
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

export default Step2;