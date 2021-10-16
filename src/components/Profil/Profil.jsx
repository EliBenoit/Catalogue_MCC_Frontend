// package
import React from "react";

// component
import Template from '../../shared/component/Template/Template';
import BookedTemplate from './bookedTemplate';

// assets
import toBook from '../../assets/toBook.svg';

// style
import "rsuite/dist/rsuite.min.css";
import "../../shared/style/sectionHeader.css";
import './profil.css'
import { Button } from "rsuite";

// data
const data={
    author: "test",
    title:"test title"
}
const Profil = () => {
    return (
    <>
    <Template type="connected">
        <section className="section-header">
            <div className="title">
                <img src={toBook} className="header-image" alt="Illustration titre" />
                <h1>Mes emprunts</h1>
            </div>
        </section>
        <section className="section-take">
            <h2 className="title-section">À récupérer</h2>
            <div className="book-list">
                <div>
                    <BookedTemplate data={data} state="collect"/>
                    <Button appearance="primary" size="xs" className="cancel">Annuler la demande</Button>
                </div>
                <div>
                    <BookedTemplate data={data} state="collect"/>
                    <Button appearance="primary" size="xs" className="cancel">Annuler la demande</Button>
                </div>
            </div>
        </section>
        <section className="section-booked">
            <h2 className="title-section">Mes emprunts</h2>
            <div className="book-list">
                <BookedTemplate data={data} state="return"/>
                <BookedTemplate data={data} state="return"/>
                <BookedTemplate data={data} state="return"/>
                <BookedTemplate data={data} state="return"/>
                <BookedTemplate data={data} state="return"/>
                <BookedTemplate data={data} state="return"/>
                <BookedTemplate data={data} state="return"/>
                <BookedTemplate data={data} state="return"/>
                <BookedTemplate data={data} state="return"/>
                <BookedTemplate data={data} state="return"/>
                <BookedTemplate data={data} state="return"/>
                <BookedTemplate data={data} state="return"/>
                <BookedTemplate data={data} state="return"/>
            </div>
        </section>
    </Template>
    </>
    )
}

export default Profil;