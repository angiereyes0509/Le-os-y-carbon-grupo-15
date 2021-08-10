import './HistorialFiltro.css'
import React from 'react';


function HistorialFiltro() {
  return (

  <div className='filtroMesas'>
    
    <label>ELEGIR MESA</label>
    <select >
   
          <option value='1'>MESA 1</option>
          <option value='2'>MESA 2</option>
          <option value='3'>MESA 3</option>
          <option value='4'>MESA 4</option>
          <option value='5'>MESA 5</option>
          <option value='6'>TODAS LAS MESAS</option>
       
       </select>
       
      </div>
        
     
  );
};

export default HistorialFiltro;

