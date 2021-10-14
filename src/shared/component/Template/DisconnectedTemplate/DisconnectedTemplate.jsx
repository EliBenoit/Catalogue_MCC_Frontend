// package
import React from "react";

// component
import Navigation from '../../Navigation';

// style
import './DisconnectedTemplate.css';

// assets
import logo from '../../../../assets/logo-mcc-white.svg'

const DisconnectedTemplate = ({children}) => {
    return (
    <div className="container">
      <header>
          <div className="logo">
              <img src={logo} className="logo" alt="Logo médiathèque La Chapelle-Curreaux" />
          </div>
          <Navigation />
      </header>
      <main>{children}</main>
      <footer>
          <p>Médiathèque La Chapelle-Curreaux</p>
      </footer>
    </div>
    )
}

export default DisconnectedTemplate;