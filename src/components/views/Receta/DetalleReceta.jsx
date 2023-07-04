import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import { obtenerReceta } from '../../helpers/queries';
import Swal from 'sweetalert2';
import { Container, ListGroup } from 'react-bootstrap';

const DetalleReceta = () => {
    const [receta, setReceta]=useState({})
    const [mostrarLoader, setMostrarLoader]=useState(true)
    const { id } = useParams();

    useEffect(()=>{
        obtenerReceta(id).then((respuesta)=>{
            if (respuesta) {
                setReceta(respuesta);
                setMostrarLoader(false)
            }else{
                Swal.fire('Error', 'Intente realizar ésta operación en unos minutos', 'error');
            }
        })
    }, []);
    return (
        <>
            <Container className='mainSection text-light'>
                {mostrarLoader?
                    <img src="/loader-2_food2.gif" alt='loader'/>:
                    <>
                    <img src={receta.imagen} className="img-fluid" alt=""/>
                    <h1 className='text-light'>{receta.titulo} <span className='text-secondary'>({receta.tiempoPreparacion} minutos)</span></h1>
                    <h2 className='text-light'>Ingredientes</h2>
                        <ul>
                            {(receta.ingredientes.split(',')).map((ingrediente, index)=>
                                <li key={index}>{ingrediente}</li>
                            )}
                        </ul>
                    <h2 className='text-light'>Pasos</h2>
                        <ol>
                            {(receta.pasos.split('\n')).map((paso, index)=>
                                <li key={index}>{paso}</li>
                            )}
                        </ol>
                    </>
                }
            </Container>
        </>
    );
};

export default DetalleReceta;