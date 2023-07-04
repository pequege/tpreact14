import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Menu from './components/common/Menu';
import Footer from './components/common/Footer';
import Inicio from './components/views/Inicio';
import Error404 from './components/views/Error404';
import Login from './components/views/Login';
import RutasProtegidas from './components/routes/RutasProtegidas';
import RutasAdministrador from './components/routes/RutasAdministrador';
import {BrowserRouter, Routes, Route, json} from 'react-router-dom'
import { useState } from 'react';
import DetalleReceta from './components/views/Receta/DetalleReceta';

function App() {
  const usuarioSessionStorage = JSON.parse(sessionStorage.getItem('usuario')) || {}
  const [usuariologgeado, setUsuariologgeado] = useState(usuarioSessionStorage);
  return (
    <BrowserRouter>
      <Menu usuariologgeado = {usuariologgeado} setUsuariologgeado={setUsuariologgeado}></Menu>
      <Routes>
        <Route path='*' element={<Error404></Error404>}></Route>
        <Route exact path='/' element={<Inicio></Inicio>}></Route>
        <Route 
          path='/administrador/*' 
          element={
            <RutasProtegidas>
              <RutasAdministrador></RutasAdministrador>
            </RutasProtegidas>
          }>
        </Route>
        <Route exact path='detalle/:id' element={<DetalleReceta></DetalleReceta>}></Route>
        <Route exact path='/login' element={<Login setUsuariologgeado={setUsuariologgeado}></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
