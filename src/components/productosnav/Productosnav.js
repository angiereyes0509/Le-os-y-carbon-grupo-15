import './Productosnav.css'
import React from "react";
import Logo from '../../assets/img/logolenos.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
        } from "react-router-dom";

function Productosnav(){
  return(
      <div className="container">
        <div className="gestion_de_productos mb-2 mb-lg-0">
            <div className="logo_lenos">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="titulo_nav_gestion_productos">
                  <img src={Logo} width="100%"/><h3>PRODUCTOS</h3>
                </li>
               </ul>
            </div> 
        </div>
      </div>
  );
}
export default Productosnav;