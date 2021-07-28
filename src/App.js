//import Login from './pages/Login.js';
import Carrito from './pages/Carrito.js';
import Registro from './pages/Registro.js';
//import Error404 from './components/error404/Error404';
import React from 'react';
import {BrowserRouter as Router,
        Switch,
        Route} from 'react-router-dom';

function App() {
  return (

    <div>
        <Router>
           <Switch>
            <Route path="/carrito" component={Carrito}></Route>
            <Route path="/registro" component={Registro}></Route>
          </Switch>
        </Router>
    </div>    
  );
};

export default App;

      //<Route path="*">
     // <Error404 />
     // </Route>