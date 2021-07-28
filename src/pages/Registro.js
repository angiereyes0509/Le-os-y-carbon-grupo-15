import React from 'react';
import ReactDOM from 'react-dom';
import Productosbanner from '../components/productosbanner/Productosbanner';
import Productosnav from '../components/productosnav/Productosnav';

function Carrito(){
    return(
        <div>
            <Productosbanner/>
            <Productosnav/>        
        </div>
    );
}
export default Carrito;
// <Productosboton/>
           // <Productoslista/>

 //import Productosboton from '../components/productosboton/Productosboton';
//import Productoslista from '../components/productoslista/Productoslista';
//import Productosnav from '../components/carritoboton/Carritoboton';
