import "./Carritoresumen.css";
import Botonmas from "../../assets/img/mas.png";
import Botoneliminar from "../../assets/img/basura.png";
import Carritoboton1 from "../carritoboton1/Carritoboton1";
import Carritoboton2 from "../carritoboton2/Carritoboton2";

function Carritoresumen() {
  return (
    <section className="resumen_pedido">
      <article className="cajaInternaCafe">
        <div className="lg-6">
          <div className="tituloYsubtitulos">
            <h1>RESUMEN DEL PEDIDO</h1>

            <div id="subtittulos_carritoresumen">
              <br />
              <br />
              <div>
                <h3> Unidades </h3>
              </div>
              <div>
                <h3> Descripción </h3>
              </div>
              <div>
                <h3> Precio </h3>
              </div>
            </div>
          </div>

          <div>
            <button className="botonPlusAndDelete">
              <img src={Botonmas} width="64px" />
            </button>
            <button className="botonPlusAndDelete">
              <img src={Botoneliminar} width="64px" />
            </button>
          </div>
          <br />

          <div>
            <button className="botonPlusAndDelete">
              <img src={Botonmas} width="64px" />
            </button>
            <button className="botonPlusAndDelete">
              <img src={Botoneliminar} width="64px" />
            </button>
          </div>
          <br />

          <div>
            <button className="botonPlusAndDelete">
              <img src={Botonmas} width="64px" />
            </button>
            <button className="botonPlusAndDelete">
              <img src={Botoneliminar} width="64px" />
            </button>
          </div>
          <br />

          <div>
            <button className="botonPlusAndDelete">
              <img src={Botonmas} width="64px" />
            </button>
            <button className="botonPlusAndDelete">
              <img src={Botoneliminar} width="64px" />
            </button>
          </div>
          <br />

          <div>
            <button className="botonPlusAndDelete">
              <img src={Botonmas} width="64px" />
            </button>
            <button className="botonPlusAndDelete">
              <img src={Botoneliminar} width="64px" />
            </button>
          </div>
          <br />

          <div>
            <button className="botonPlusAndDelete">
              <img src={Botonmas} width="64px" />
            </button>
            <button className="botonPlusAndDelete">
              <img src={Botoneliminar} width="64px" />
            </button>
          </div>
          <br />

          <div>
            <button className="botonPlusAndDelete">
              <img src={Botonmas} width="64px" />
            </button>
            <button className="botonPlusAndDelete">
              <img src={Botoneliminar} width="64px" />
            </button>
          </div>
          <br />

          <div>
            <button className="botonPlusAndDelete">
              <img src={Botonmas} width="64px" />
            </button>
            <button className="botonPlusAndDelete">
              <img src={Botoneliminar} width="64px" />
            </button>
          </div>
          <br />

          <div>
            <button className="botonPlusAndDelete">
              <img src={Botonmas} width="64px" />
            </button>
            <button className="botonPlusAndDelete">
              <img src={Botoneliminar} width="64px" />
            </button>
          </div>
          <br />
        </div>

        <hr />

        <Carritoboton1 />
        <Carritoboton2 />
      </article>
    </section>
  );
}
export default Carritoresumen;
