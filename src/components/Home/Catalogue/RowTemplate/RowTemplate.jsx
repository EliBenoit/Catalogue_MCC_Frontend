// package
import React from "react";

// component
import Message from '../../../../shared/component/Message';

// style
import "rsuite/dist/rsuite.min.css";
import './rowTemplate.css';

// asset
import toBook from '../../../../assets/toBook.svg'

// data
import fakeCover from '../../../../assets/fakebook.jpg'
import { Button } from "rsuite";

const RowTemplate = ({bookData}) => {
    const isConnected = true;
    const data = bookData;
    const isBooked = data.isBooked && "booked";
    const messageType = data.isBooked ? "error" : "success";
    const messageContent = data.isBooked ? "Emprunté" : "Disponible";

    const kindContent = data.kind.map((ki, index) => (<Message content={ki} key={index}/>))
    
    return (
        <div className="row">
            <img src={fakeCover} className="cover" alt={`Couverture de ${data.title}`}/>
            <div className="informations">
                <div className="inline">
                    <div className="title">{data.title}</div>
                    <Message type={messageType} content={messageContent} />
                </div>
                <div className="author">{data.author}</div>
                <div className="parutionDate">{data.parutionDate}</div>
                <div className="kind">{kindContent}</div>
            </div>
            <div className="description">
                <p>{data.description}</p>
                { isConnected && (
                <div className="toBook">
                    <img className={isBooked} src={toBook} alt="Emprunter un livre" />
                    <Button className="bookButton" appearance="primary" disabled={data.isBooked}>Emprunter</Button>
                </div>
                )}
            </div>
        </div>
    )
};

export default RowTemplate;