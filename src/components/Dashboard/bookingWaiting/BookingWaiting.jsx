// package
import React from "react";

// component
import { Button } from "rsuite";
import Message from '../../../shared/component/Message';

// style
import "rsuite/dist/rsuite.min.css";
import '../row.css';

// data

const BookingWaiting = () => {
    const reader = "Nom Prénom";
    const book = "Nom du livre";
    const author = "Nom prénom auteur";
    const content = `Emprunt demandé le : ${new Date('01/12/2021').toLocaleDateString()}`;
    return (
        <>
            <div className="row-book">
                <div className="book-information">
                    <p>{book}</p>
                    <p>{author}</p>
                </div>
                <p className="booked-by">Emprunt demandé par : {reader}</p>
                <Message type="warning" content={content} className="date-message"/>
                <div  className="action">
                   <Button appearance="primary" size="xs">Valider</Button>
                   <Button size="xs">Annuler</Button>
                </div>
            </div>
        </>
    )
}

export default BookingWaiting;