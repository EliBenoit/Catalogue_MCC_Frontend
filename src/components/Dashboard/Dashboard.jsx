// package
import React, { useState } from "react";

// component
import Template from '../../shared/component/Template/Template';
import { Nav } from "rsuite";
import Late from "./late/Late";
import Booked from "./booked/Booked";
import BookingWaiting from "./bookingWaiting/BookingWaiting";
import RegisterWaiting from "./registerWaiting/RegisterWaiting";

// assets
import book from '../../assets/book.svg';

// style
import "rsuite/dist/rsuite.min.css";
import "../../shared/style/sectionHeader.css";

const Home = () => {
    const [active, setActive] = useState('late');
    return (
    <>
    <Template type="connected">
        <section className="section-header">
            <div className="title">
                <img src={book} className="header-image" alt="Illustration titre" />
                <h1>Tableau de board</h1>
            </div>
        </section>
        <section className="section-navigation">
            <Nav appearance="subtle" activeKey={active} onSelect={setActive}>
                <Nav.Item eventKey="late">En retard</Nav.Item>
                <Nav.Item eventKey="booked">Emprunt en cours</Nav.Item>
                <Nav.Item eventKey="bookingWaiting">Demande d'emprunt</Nav.Item>
                <Nav.Item eventKey="registerWaiting">Demande d'inscrption</Nav.Item>
            </Nav>
        </section>
        <section>
            { active==="late" && (<Late />)}
            { active==="booked" && (<Booked />)}
            { active==="bookingWaiting" && (<BookingWaiting />)}
            { active==="registerWaiting" && (<RegisterWaiting />)}
        </section>
    </Template>
    </>
    )
}

export default Home;