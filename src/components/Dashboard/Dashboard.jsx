// package
import React, { useState } from "react";

// component
import Template from '../../shared/component/Template/Template';
import { Nav, Button } from "rsuite";
import Late from "./late/Late";
import Booked from "./booked/Booked";
import BookingWaiting from "./bookingWaiting/BookingWaiting";
import RegisterWaiting from "./registerWaiting/RegisterWaiting";
import AddBook from './addBook/AddBook';

// assets
import book from '../../assets/book.svg';

// style
import "rsuite/dist/rsuite.min.css";
import "../../shared/style/sectionHeader.css";

const Home = () => {
    const [active, setActive] = useState('late');
    const [addingBook, setAddingBook] = useState(false);

    return (
    <>
    <Template type="connected">
        <section className="section-header">
            <div className="title">
                <img src={book} className="header-image" alt="Illustration titre" />
                <h1>Tableau de board</h1>
            </div>
            {addingBook ? (<Button onClick={() => setAddingBook(false)}>Annuler l'ajout</Button>) : 
            (<Button appearance="primary" onClick={() => setAddingBook(true)}>Ajouter un livre</Button>)}
        </section>
           {!addingBook && (
               <>
            <section className="section-navigation"> 
                <Nav appearance="subtle" activeKey={active} onSelect={setActive}>
                    <Nav.Item eventKey="late">En retard</Nav.Item>
                    <Nav.Item eventKey="booked">Emprunt en cours</Nav.Item>
                    <Nav.Item eventKey="bookingWaiting">Demande d'emprunt</Nav.Item>
                    <Nav.Item eventKey="registerWaiting">Demande d'inscrption</Nav.Item>
                </Nav>
            </section>
             <section>
                {/**
                 * 
                 * Here for each section, i need to map on the result give by the back end. 
                 * Before map, I need to sort the return data to split information :
                 * - the booking that are late in return
                 * - the booked list that are on time
                 * - the waiting booking
                 * 
                 * I can make this method in the backend, but to keep back easier to maintain,
                 * I choose to make all this function in the frontend. This sort function will be keep in a helper folder.
                 * 
                 * And on user, i need to map on the list to only keep (with filter) the waiting one. 
                 * If the register is reject, we delete user from the data base. 
                 * 
                 */}
                { active==="late" && (<Late />)}
                { active==="booked" && (<Booked />)}
                { active==="bookingWaiting" && (<BookingWaiting />)}
                { active==="registerWaiting" && (<RegisterWaiting />)}
            </section>
            </>
            )}
            { addingBook && (
                <section>
                    <AddBook />
                </section>
            )
            }
    </Template>
    </>
    )
}

export default Home;