import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import store from '../src/store/';
import {Provider} from 'react-redux';

/* PÁGINAS */
import Login from './view/login/';
import NovoUsuario from './view/usuario-novo';
import Home from './view/home';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/novousuario" element={<NovoUsuario/>}/>
          <Route exact path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
