import React from 'react';
import ReactDOM from 'react-dom';
import Carritoheader from '../components/carritoheader/Carritoheader';
import Carritonav from '../components/carritonav/Carritonav';
import Carritolistaprecios from '../components/carritolistaprecios/Carritolistaprecios';
import Carritoboton from '../components/carritoboton/Carritoboton';
import Carritoboton2 from '../components/carritoboton2/Carritoboton2';
import Carritoresumen from '../components/carritoresumen/Carritoresumen';

function Carrito(){
    return(
        <div>
            <Carritoheader/>
            <Carritonav/>
            <Carritolistaprecios/>
            <Carritoboton/>
            <Carritoboton2/>
            <Carritoresumen/>            
        </div>
    );
}
export default Carrito;