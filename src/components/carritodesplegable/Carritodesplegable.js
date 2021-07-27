import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown,DropdownItem,DropdownMenu,DropdownToggle} from 'reactstrap';
import './Carritodesplegable.css';


function Carritodesplegable() {

	const[dropdown, setDropdown]=useState(false);

	const abrirCerrarDropdown=()=>{
		setDropdown(!dropdown); 
	}


	return (
		<div className="lista_mesas">
			<Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} size="lg">
				
				<DropdownToggle caret>
					Elegir mesa 
				</DropdownToggle>

				<DropdownMenu>

					<DropdownItem> MESA 1 </DropdownItem>
					<DropdownItem> MESA 2 </DropdownItem>
					<DropdownItem> MESA 3 </DropdownItem>
					<DropdownItem> MESA 4 </DropdownItem>
					<DropdownItem> MESA 5 </DropdownItem>

				</DropdownMenu>
		

			</Dropdown>
		</div>
		

	);
} 

export default Carritodesplegable;

//<DropdownToggle> es el cuerpo ó el body que al presionarlo nos traerá la lista desplegable
//caret en la línea 20 es para traer el ícono que le hará entender a la persona que es un alista desplegable 
// 