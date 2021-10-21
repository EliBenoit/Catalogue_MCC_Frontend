// package
import React from "react";
import { useSelector } from 'react-redux';

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
    const isConnected = useSelector((state) => state.user.isConnected);
    const isValidate = useSelector((state) => state.user.isValidate);

    const data = bookData;
    const isBooked = data.isBooked && "booked";
    const messageType = data.isBooked ? "error" : "success";
    const messageContent = data.isBooked ? "Emprunté" : "Disponible";
    const kind = data.kind

    /**
     * 
     * Here I use a fake cover stock inside assets. But when we get data from back, we will have a string. 
     * So to shown the cover, we need to use URL.createObjectURL(prop).
     * The prop can be a file, blob, or MediaSource object. And it will return a DOMString containing an object URL.
     * 
     */
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
                <div className="kind"><Message content={kind} /></div>
            </div>
            <div className="description">
                <p>{data.description}</p>
                { (isConnected && isValidate) && (
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