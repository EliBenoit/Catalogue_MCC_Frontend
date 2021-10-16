// package
import React from "react";

// component
import { Button } from "rsuite";
import Message from '../../../shared/component/Message';

// style
import "rsuite/dist/rsuite.min.css";
import '../row.css';

// data

const Late = () => {
    const reader = "Nom Prénom";
    const book = "Nom du livre";
    const author = "Nom prénom auteur";
    const content = `À retourner avant le : ${new Date('01/12/2021').toLocaleDateString()}`;
    return (
        <>
            <div className="row-book">
                <div className="book-information">
                    <p>{book}</p>
                    <p>{author}</p>
                </div>
                <p className="booked-by">Emprunté par : {reader}</p>
                <Message type="error" content={content} className="date-message"/>
                <div  className="action">
                   <Button appearance="primary" size="xs">Retouner</Button>
                </div>            
            </div>
        </>
    )
}

export default Late;