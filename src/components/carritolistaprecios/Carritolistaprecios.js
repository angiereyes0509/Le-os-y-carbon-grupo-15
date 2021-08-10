//import './Carritolistaprecios.css';
import Carro from "../../assets/img/carro.png";
import Actualizar2 from "../../assets/img/actualizar2.png";
import Actualizar2negativo from "../../assets/img/actualizar2negativo.png";
import myStyles from "./Carritolistaprecios.module.css";
import Carritoresumen from "../carritoresumen/Carritoresumen";
import menu from "./Categorias.json";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
function Lista(props) {
  return (
    <div>
      <div className={myStyles.itemLista}>
        <div>
          <h4> {props.platoSeleccion.nameProduct} </h4>
        </div>
        <div>
          <button className={myStyles.botonCarrito}>
            <img src={Carro} width="64px" />
          </button>
        </div>
        <div>
          <h3> PRECIO:</h3>
        </div>
        <div>
          <p> {props.platoSeleccion.price} </p>
        </div>
      </div>
    </div>
  );
}

function Carritolistaprecios() {
  const listDePlatosSelect = menu.filter(
    (data) => data.categoria == "entradas"
  );
  return (
    <section className={myStyles["listadoPrecios"]}>
      <div className={myStyles.lista}>
        <article className="lg-6">
          {listDePlatosSelect[0].platos.map((plato) => (
            <Lista platoSeleccion={plato} key={plato.id} />
          ))}
        </article>
      </div>
    </section>
  );
}
export default Carritolistaprecios;

//<Route path="/carrito" component={Carrito}></Route>		</Switch>
