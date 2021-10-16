// package
import React from "react";

// style
import './message.css';

const Message = ({type, content}) => {
    return (
        <div className={`wrapper ${type}`}>
            <p className="content">{content}</p>
        </div>
    )
};

export default Message;