import React, { useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Administrador = () => {
    useEffect
    return (
        <>  
            <Container className='mainSection p-2'>
                <div className="d-flex justify-content-between align-items-center m-2">
                    <h1 className="display-4 text-light">Recetas disponibles</h1>
                    <Link className="btn btn-primary" to='/administrador/crear-receta'>
                    <i className='bi bi-clipboard-plus-fill'></i> Crear
                    </Link>
                </div>
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    );
};

export default Administrador;