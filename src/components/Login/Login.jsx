// package
import React from "react";
import {  useHistory  } from "react-router";

// component
import Template from "../../shared/component/Template/Template";
import { Form, Button, Divider } from 'rsuite';

// style
import "rsuite/dist/rsuite.min.css";
import '../../shared/style/formStyle.css';

const Login = () => {
    const history = useHistory();

    function redirect(){
        const path = `/inscription`;
        history.push(path);
    }

    return (
    <Template>
        <div className="form">
            <Form>
                <Form.Group controlId="email">
                    <Form.ControlLabel>Identifiant</Form.ControlLabel>
                    <div className="wrapped-tooltip">
                        <Form.Control name="email" type="email" />
                        <Form.HelpText tooltip>Votre adresse mail</Form.HelpText>
                    </div>
                </Form.Group>
                <Form.Group controlId="password" >
                    <Form.ControlLabel>Mot de passe</Form.ControlLabel>
                    <Form.Control name="password" type="password" autoComplete="off" />
                </Form.Group>
                <Form.Group>
                    <Button appearance="primary" className="button">Se connecter</Button>
                </Form.Group>
            </Form>
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