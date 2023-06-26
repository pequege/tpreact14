import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom"

const Menu = ({usuariologgeado, setUsuariologgeado}) => {
  const navegacion = useNavigate();

  const cerrarSesion = () =>{
    sessionStorage.removeItem('usuario');
    setUsuariologgeado({})
    navegacion('/');
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to='/'>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className='nav-item nav-link' to='/' end>Inicio</NavLink>
              {
                (usuariologgeado.nombreUsuario)?
                <>
                <NavLink className='nav-item nav-link' to='/administrador' end>Administrador</NavLink>
                <Button variant="dark" onClick={cerrarSesion}>Log Out</Button>
                </>:
                <NavLink className='nav-item nav-link' to='/login' end>Login</NavLink>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
