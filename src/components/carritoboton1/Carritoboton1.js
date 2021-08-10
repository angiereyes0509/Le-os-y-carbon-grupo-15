import "./Carritoboton1.css";
import Actualizar2 from "../../assets/img/actualizar2.png";
import Actualizar2negativo from "../../assets/img/actualizar2negativo.png";

function Carritoboton1() {
  return (
    <div>
      <div className="boton_guardar">
        <button className=" btn btn-cafe">
          <img src={Actualizar2} width="30px" />
          GUARDAR PEDIDO
        </button>
      </div>

      <br />
    </div>
  );
}
export default Carritoboton1;
