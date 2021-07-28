import Logo from '../../assets/img/lenos.png';
import Botonatras from '../../assets/img/atras.png';
import Botoncerrarsesion from '../../assets/img/cerrarsesion.png';
import './Carritoheader.css';

function Carritoheader() {
  return (
  	<header>
  		<article>
  			<div className="botones">
	  			<button className="boton_atras"><img src={Botonatras} width="64px"/></button>
	  			<button className="boton_cerrar_sesion"><img src={Botoncerrarsesion} width="64px"/><p>Cerrar Sesión</p></button>
			</div>
	  		
	  		<div className="logo">
	  			<img src={Logo}/>
	  				<div className="titulo_header_carrito">
	  		 			<h1> MENÚ </h1>
					</div>	
			</div>
			
	  	</article>
	 </header>
  );
}

export default Carritoheader;
