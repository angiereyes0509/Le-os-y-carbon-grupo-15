import './Productosbanner.css';
import Registrobanner from '../../assets/img/bannerregistroproducto.svg';
import BotonCerrarSesion from '../../assets/img/cerrarsesion.png';
import Botonatras from '../../assets/img/atras.png';
import Botoncerrarsesion from '../../assets/img/cerrarsesion.png';



function Productosbanner(){
    return(
    <section className="gestion_productos" >
    	<div className="container">
    		<div>
                <img src={Registrobanner} width="100%"/>
                	<div className="botones">
	  					<button className="boton_atras"><img src={Botonatras} width="64px"/></button>
	  					<button className="boton_cerrar_sesion"><img src={Botoncerrarsesion} width="64px"/><p>Cerrar Sesión</p></button>
					</div>
			</div>
		</div>
	</section>

    );
}
export default Productosbanner;