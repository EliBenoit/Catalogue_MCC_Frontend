// package
import React from "react";

// component
import Template from '../../shared/component/Template/Template';
import Catalogue from './Catalogue';

// assets
import book from '../../assets/book.svg';

// style
import "rsuite/dist/rsuite.min.css";
import "../../shared/style/sectionHeader.css";

// data

const Home = () => {
    return (
    <>
    <Template type="connected">
        <section className="section-header">
            <div className="title">
                <img src={book} className="header-image" alt="Illustration titre" />
                <h1>Catalogue</h1>
            </div>
        </section>
        <section className="section-catalogue">
            <Catalogue/>
        </section>
    </Template>
    </>
    )
}

export default Home;