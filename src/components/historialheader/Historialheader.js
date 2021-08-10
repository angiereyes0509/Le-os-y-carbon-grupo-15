import './Historialheader.css';
import Logo from '../../assets/img/logolenos.png';
import Botonatras from '../../assets/img/atras.png';
import Botoncerrarsesion from '../../assets/img/cerrarsesion.png';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
        } from "react-router-dom";


function Historialheader() {
  return (
  	<header>
  		<article>
  			<div className="botones">
	  			<button className="boton_atras" onClick={()=>window.history.back()}>
  				  <img src={Botonatras} width="64px" alt="Botón"/></button>

	  			<button className="boton_cerrar_sesion">
	  				<img src={Botoncerrarsesion} width="64px"/><p>Cerrar Sesión</p></button>
			</div>
	  		
	  		<div className="logo">
	  			<img src={Logo} width="230px"/>
	  				<div className="tituloHeaderMesas">
	  		 			<h1> HISTORIAL MESAS </h1> 
	  		 				<li className="volverMenu">
            					<Link to="/carrito" sensitive> volver al Menu</Link>
          					</li>

					</div>
			</div>

	  	</article>
	 </header>

  );
}

export default Historialheader;
