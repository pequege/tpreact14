import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Menu from './components/common/Menu';
import Footer from './components/common/Footer';
import Inicio from './components/views/Inicio';
import Error404 from './components/views/Error404';
import CrearReceta from './components/views/CrearReceta';
import Administrador from './components/views/Administrador';
import Login from './components/views/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path='*' element={<Error404></Error404>}></Route>
        <Route exact path='/' element={<Inicio></Inicio>}></Route>
        <Route exact path='/administrador' element={<Administrador></Administrador>}></Route>
        <Route exact path='/login' element={<Login></Login>}></Route>
        <Route exact path='/administrador/crear-receta' element={<CrearReceta></CrearReceta>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
