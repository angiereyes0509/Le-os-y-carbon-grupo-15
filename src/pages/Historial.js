import React from 'react';
import ReactDOM from 'react-dom';
import Historialheader from '../components/historialheader/Historialheader';
import HistorialFormu from '../components/historialFormu/HistorialFormu';



function Historial(){
    return(
        <div>
            <Historialheader/>
            <HistorialFormu/>
            
        </div>
    );
}
export default Historial;