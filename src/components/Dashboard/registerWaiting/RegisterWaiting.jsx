// package
import React from "react";

// component
import { Button } from "rsuite";

// style
import "rsuite/dist/rsuite.min.css";
import '../row.css';

// data

const RegisterWaiting = () => {
    const reader = "Nom Prénom";
    const birthDate = new Date('01/12/2021').toLocaleDateString();
    const adressPostal = "adress postal un peu longue";
    const postalCode = "54000";
    const city = "Nancy";
    const email = "testuser@email.com";
    return (
        <>
            <div className="row-user">
                <div className="user-info">
                    <p>{reader}</p>
                    <p>{birthDate}</p>
                    <p>{`${adressPostal} - ${postalCode} - ${city}`}</p>
                    <p>{email}</p>
                </div>
                <div  className="action">
                   <Button appearance="primary" size="xs">Valider</Button>
                   <Button size="xs">Refuser</Button>
                </div>
            </div>
        </>
    )
}

export default RegisterWaiting;