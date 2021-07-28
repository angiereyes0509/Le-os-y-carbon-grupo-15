import './Carritoresumen.css';
import Botonmas from '../../assets/img/mas.png';
import Botoneliminar from '../../assets/img/basura.png';



function Carritoresumen(){
    return(
		<section id="resumen_pedido">
			<article className="col-md-6 col-lg-6">
				<div id="titulo_y_subtitulos">
				
					<h1>RESUMEN DE PEDIDO</h1>	

						<div id="subtittulos_carritoresumen">
							<h3> Unidades </h3><br></br> <h3> Descripción </h3><br></br> <h3> Precio </h3>
						</div>
				</div>

					<div>
						<button><img src={Botonmas} width="64px"/></button> <button><img src={Botoneliminar} width="64px"/></button> 
					</div>
							<br/>

					<div>
						<button><img src={Botonmas} width="64px"/></button> <button><img src={Botoneliminar} width="64px"/></button> 
					</div>
							<br/>

					<div>
						<button><img src={Botonmas} width="64px"/></button> <button><img src={Botoneliminar} width="64px"/></button> 
					</div>
							<br/>

					<div>
						<button><img src={Botonmas} width="64px"/></button> <button><img src={Botoneliminar} width="64px"/></button> 
					</div>
							<br/>

					<div>
						<button><img src={Botonmas} width="64px"/></button> <button><img src={Botoneliminar} width="64px"/></button> 
					</div>
							<br/>

					<div>
						<button><img src={Botonmas} width="64px"/></button> <button><img src={Botoneliminar} width="64px"/></button> 
					</div>
							<br/>

					<div>
						<button><img src={Botonmas} width="64px"/></button> <button><img src={Botoneliminar} width="64px"/></button> 
					</div>
							<br/>

					<div>
						<button><img src={Botonmas} width="64px"/></button> <button><img src={Botoneliminar} width="64px"/></button> 
					</div>
							<br/>

					<div>
						<button><img src={Botonmas} width="64px"/></button> <button><img src={Botoneliminar} width="64px"/></button> 
					</div>
							<br/>
			</article>
		</section>


    );
}
export default Carritoresumen;