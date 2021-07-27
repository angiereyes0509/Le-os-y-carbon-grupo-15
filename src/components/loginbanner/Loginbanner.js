import './Loginbanner.css';
import Bannerlogin from '../../assets/img/loginbanner.png';


function Loginbanner(){
    return(
    	<div>
			<div className="boton_guardar" >
                <button className=" btn btn-cafe"><img src={Bannerlogin} width="30px"/>GUARDAR PEDIDO</button>
			</div>

<br></br>

		</div>

    );
}
export default Loginbanner;