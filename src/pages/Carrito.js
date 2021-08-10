import React from 'react';
import ReactDOM from 'react-dom';
import Carritoheader from '../components/carritoheader/Carritoheader';
import Carritonav from '../components/carritonav/Carritonav';
import Carritolistaprecios from '../components/carritolistaprecios/Carritolistaprecios';
import Carritoresumen from '../components/carritoresumen/Carritoresumen';


function Carrito(){
    return(
        <div>
            <Carritoheader/>
            <Carritonav/> 

          <div className="row">
            <div className="col-lg-6"><Carritolistaprecios/> </div>
            <div className="col-lg-6"><Carritoresumen/></div>
           </div>
        </div>
    );
}
export default Carrito;

