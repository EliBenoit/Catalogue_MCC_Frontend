// package
import React from "react";
import moment from 'moment';

// component
import Message from '../../../shared/component/Message';

// style
import "rsuite/dist/rsuite.min.css";
import './bookedTemplate.css';

// helpers
import isPassDate from "../../../shared/Helpers/dateHelpers";
// data

const Profil = ({data, state}) => {    
    if (state === 'collect'){
        const bookedValidate = true;
        const type = bookedValidate ? "success" : "warning";
        const content = bookedValidate ? `À récupérer avant le : ${moment().add(10, 'days').calendar()}` : "En attente de validation";
        return (
        <div className="bookedTemplate-wrapper">
            <h2 className="bookedTemplate-title">{data.title}</h2>
            <p className="bookedTemplate-author">{data.author}</p>
            <Message content={content} type={`${type}`}/>
        </div>
    )}

    if (state === 'return'){
        const type = isPassDate(new Date('01/05/2022')) ? "error" : "success";
        const content =  `À rendre avant le : ${new Date('01/12/2021').toLocaleDateString()}`;
        return(
        <div className="bookedTemplate-wrapper">
            <h2 className="bookedTemplate-title">{data.title}</h2>
            <p className="bookedTemplate-author">{data.author}</p>
            <Message content={content} type={`${type}`}/>
        </div>  
        )
    }
}

export default Profil;