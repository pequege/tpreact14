import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { obtenerRecetas } from '../helpers/queries';
import Swal from 'sweetalert2';
import ItemReceta from './Receta/ItemReceta';

const Administrador = () => {
    const [recetas, setRecetas] = useState([]);
    useEffect(()=>{
        //consulta a la api
        obtenerRecetas().then((respuesta)=>{
            if(respuesta){
                setRecetas(respuesta);
            }else{
                Swal.fire('Error', 'Intente realizar ésta operación en unos minutos', 'error');
            }
        })
    },[]);

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
                        <th>Título</th>
                        <th>Descripción</th>
                        <th>ingredientes</th>
                        <th>Tiempo Preparación</th>
                        <th>Url de imagen</th>
                        <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            recetas.map((receta )=><ItemReceta key={receta.id} receta={receta} recetas={recetas} setRecetas={setRecetas}></ItemReceta>)
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    );
};

export default Administrador;