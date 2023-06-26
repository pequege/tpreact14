import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Menu from './components/common/Menu';
import Footer from './components/common/Footer';
import Inicio from './components/views/Inicio';
import Error404 from './components/views/Error404';
import CrearReceta from './components/views/CrearReceta';
import Administrador from './components/views/Administrador';
import Login from './components/views/Login';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter, Routes, Route, json} from 'react-router-dom'
import { useState } from 'react';

function App() {
  const usuarioSessionStorage = JSON.parse(sessionStorage.getItem('usuario')) || {}
  const [usuariologgeado, setUsuariologgeado] = useState(usuarioSessionStorage);
  return (
    <BrowserRouter>
      <Menu usuariologgeado = {usuariologgeado} setUsuariologgeado={setUsuariologgeado}></Menu>
      <Routes>
        <Route path='*' element={<Error404></Error404>}></Route>
        <Route exact path='/' element={<Inicio></Inicio>}></Route>
        <Route exact path='/administrador' element={<Administrador></Administrador>}></Route>
        <Route exact path='/login' element={<Login setUsuariologgeado={setUsuariologgeado}></Login>}></Route>
        <Route exact path='/administrador/crear-receta' element={<CrearReceta></CrearReceta>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
