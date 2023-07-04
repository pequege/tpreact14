import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import { obtenerReceta } from '../../helpers/queries';
import Swal from 'sweetalert2';
import { Container } from 'react-bootstrap';

const DetalleReceta = () => {
    const [receta, setReceta]=useState({})
    const { id } = useParams();

    useEffect(()=>{
        obtenerReceta(id).then((respuesta)=>{
            if (respuesta) {
                setReceta(respuesta);
            }else{
                Swal.fire('Error', 'Intente realizar ésta operación en unos minutos', 'error');
            }
        })
    }, []);
    return (
        <>
            <Container className='mainSection'>
                <img src={receta.imagen} className="img-fluid" alt=""/>
                <h1 className='text-light'>{receta.titulo}</h1>
                <p>{receta.ingredientes}</p>
            </Container>
        </>
    );
};

export default DetalleReceta;