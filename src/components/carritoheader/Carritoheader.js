import Logo from "../../assets/img/logolenos.png";
import Botonatras from "../../assets/img/atras.png";
import Botoncerrarsesion from "../../assets/img/cerrarsesion.png";
import Carritodesplegable from "../carritodesplegable/Carritodesplegable";
import "./Carritoheader.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

function Carritoheader() {
  return (
    <header>
      <article>
        <div className="botones">
          <button className="boton_atras" onClick={() => window.history.back()}>
            <img src={Botonatras} width="64px" alt="Botón" />
          </button>

          <button className="boton_cerrar_sesion">
            <img src={Botoncerrarsesion} width="64px" />
            <p>Cerrar Sesión</p>
          </button>
        </div>

        <div className="logo">
          <img src={Logo} width="230px" />
          <div className="titulo_header_carrito">
            <h1> MENÚ </h1>
            <li className="titulo_historial_mesas">
              <Link to="/historialmesas" sensitive>
                {" "}
                HISTORIAL MESAS
              </Link>
            </li>
            <Carritodesplegable className="carritodesplegable" />
          </div>
        </div>
      </article>
    </header>
  );
}

export default Carritoheader;

//<a href="javascript:history.back()"><img src="images/boton.jpg" height="33" width="100" alt="Botón"</a>

// <input type="button" onclick="history.back()" name="volver atrás" value="volver atrás">

// éste es como está actualmente	<button className="boton_atras"><img src={Botonatras} width="64px"/></button>
