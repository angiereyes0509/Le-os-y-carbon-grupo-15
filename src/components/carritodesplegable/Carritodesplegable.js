import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import "./Carritodesplegable.css";

function Carritodesplegable() {
  const [dropdown, setDropdown] = useState(false);

  const abrirCerrarDropdown = () => {
    setDropdown(!dropdown);
  };
  const accionPrueba = (param) => {
    alert("Haz elegido la mesa " + param);
  };

  return (
    <div className="lista_mesas">
      <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} size="lg">
        <DropdownToggle caret>Elegir mesa</DropdownToggle>

        <DropdownMenu>
          <DropdownItem onClick={() => accionPrueba(1)}> MESA 1 </DropdownItem>
          <DropdownItem onClick={() => accionPrueba(2)}> MESA 2 </DropdownItem>
          <DropdownItem onClick={() => accionPrueba(3)}> MESA 3 </DropdownItem>
          <DropdownItem onClick={() => accionPrueba(4)}> MESA 4 </DropdownItem>
          <DropdownItem onClick={() => accionPrueba(5)}> MESA 5 </DropdownItem>
        </DropdownMenu>
        <br />
      </Dropdown>
    </div>
  );
}

export default Carritodesplegable;

//<DropdownToggle> es el cuerpo ó el body que al presionarlo nos traerá la lista desplegable
//caret en la línea 20 es para traer el ícono que le hará entender a la persona que es un alista desplegable
// const accionPrueba=()=>{
//	 	alert('Haz elegido la mesa (MESA 1)');
//	}  ésta es la forma en la que le añadimos un alert a nuestro desplegable
