import Login from './pages/Login.js';
import Carrito from './pages/Carrito.js';
import Registro from './pages/Registro.js';
import Historial from './pages/Historial.js';
import firebase from './firebase.js'; 

//import Error404 from './components/error404/Error404';
import React from 'react';
import {BrowserRouter as Router,
        Switch,
        Route} from 'react-router-dom';
import RegistroProvisional from './pages/RegistroProvisional.js';

function App() {
  return (

    <div>
        <Router>
           <Switch>
           
            <Route path="/carrito" component={Carrito}></Route>
            <Route path="/registro" component={Registro}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/historialmesas" component={Historial}></Route>
            <Route path="/registroprovisional" component={RegistroProvisional}></Route>

          </Switch>
        </Router>
    </div>    
  );
};

export default App;

      //<Route path="*">
     // <Error404 />
     // </Route>