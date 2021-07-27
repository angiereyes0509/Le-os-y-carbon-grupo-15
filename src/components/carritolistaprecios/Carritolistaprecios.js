import './Carritolistaprecios.css';
import Carro from '../../assets/img/carro.png';
import Actualizar2 from '../../assets/img/actualizar2.png';
import Actualizar2negativo from '../../assets/img/actualizar2negativo.png';



function Carritolistaprecios(){
    return(
		<section className="listado_precios">
			<div id="lista">
				<div className="row">
					<article className="col-lg-6"> // col-3 md-6

						<div className="item_lista">
							<h4>CHICHARRONES <button><img src={Carro} width="64px"/></button></h4>
							<h3> PRECIO:</h3> <p> 17.900 </p> 
						</div>
<br></br>
						<div className="item_lista">
							<h4>CHORIZOS LEÑOS <button><img src={Carro} width="64px"/></button></h4>
							<h3> PRECIO:</h3> <p>16.900 </p> 
						</div>
<br></br>
						<div className="item_lista">
							<h4>EMPANADAS <button><img src={Carro} width="64px"/></button></h4> <h3> PRECIO: 13.900 </h3>
						</div>
<br></br>
						<div className="item_lista">
							<h4>MONEDITAS DE PLATANO <button><img src={Carro} width="64px"/></button></h4> <h3> PRECIO: 5.200 </h3>
						</div>
<br></br>
		
						<div className="item_lista">
							<h4>MORCILLA LEÑOS <button><img src={Carro} width="64px"/></button></h4> <h3> PRECIO: 10.900 </h3>
						</div>
<br></br>				
						<div className="item_lista">
							<h4>PATACONES CON HOGAO <button><img src={Carro} width="64px"/></button></h4> <h3> PRECIO: 6.900 </h3>
						</div>
<br></br>


					</article>

				</div>
			</div>
		</section>

    );
}
export default Carritolistaprecios;