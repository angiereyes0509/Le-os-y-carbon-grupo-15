//import './Carritolistaprecios.css';
import Carro from "../../assets/img/carro.png";
import Actualizar2 from "../../assets/img/actualizar2.png";
import Actualizar2negativo from "../../assets/img/actualizar2negativo.png";
import myStyles from "./Carritolistaprecios.module.css";
import Carritoresumen from "../carritoresumen/Carritoresumen";
import data from "./Categorias.json";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

function Carritolistaprecios() {
  //const listDePlatosSelect =
  return (
    <section className={myStyles["listadoPrecios"]}>
      <div className={myStyles.lista}>
        <article className="lg-6">
          <div className={myStyles.itemLista}>
            <div>
              <h4> CHICHARRONES </h4>
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
              <p> 17.900 </p>
            </div>
          </div>
          <br />

          <div className={myStyles.itemLista}>
            <div>
              <h4> CHORIZOS LEÑOS</h4>
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
              <p> 16.900 </p>
            </div>
          </div>
          <br />

          <div className={myStyles.itemLista}>
            <div>
              <h4> EMPANADAS</h4>
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
              <p> 13.900 </p>
            </div>
          </div>
          <br />

          <div className={myStyles.itemLista}>
            <div>
              <h4> MONEDITAS DE PLATANO</h4>
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
              <p> 5.200 </p>
            </div>
          </div>
          <br />

          <div className={myStyles.itemLista}>
            <div>
              <h4> MORCILLA LEÑOS</h4>
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
              <p> 10.900 </p>
            </div>
          </div>
          <br />

          <div className={myStyles.itemLista}>
            <div>
              <h4> PATACONES CON HOGAO</h4>
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
              <p> 6.900 </p>
            </div>
          </div>
          <br />
        </article>
      </div>
    </section>
  );
}
export default Carritolistaprecios;

//<Route path="/carrito" component={Carrito}></Route>		</Switch>
