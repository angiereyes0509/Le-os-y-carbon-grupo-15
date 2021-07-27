import './Carritonav.css'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
        } from "react-router-dom";

function Carritonav(){
  return(
      <nav>
        <ul className="menu">
          
          <li className="item">
            <Link to="/">ENTRADAS</Link>
          </li>

          <li className="item">
            <Link to="/desayunos" sensitive>DESAYUNOS</Link>
          </li>

          <li className="item">
            <Link to="/sandwiches" sensitive>SANDWICHES</Link>
          </li>
          
          <li className="item">
            <Link to="/res" sensitive>RES</Link>
          </li>
          
          <li className="item">
            <Link to="/pollo" sensitive>POLLO</Link>
          </li>
          
          <li className="item">
            <Link to="/pescados" sensitive>PESCADOS</Link>
          </li>

          <li className="item">
            <Link to="/cerdo" sensitive>CERDO</Link>
          </li>

          <li className="item">
            <Link to="/parrilleros" sensitive>PARRILLEROS</Link>
          </li>

          <li className="item">
            <Link to="/cotidianos" sensitive>COTIDIANOS</Link>
          </li>

          <li className="item">
            <Link to="/bebidas" sensitive>BEBIDAS</Link>
          </li>

          <li className="item">
            <Link to="/postres" sensitive>POSTRES</Link>
          </li>
                  
        </ul>
      </nav>
  );
}
export default Carritonav;
