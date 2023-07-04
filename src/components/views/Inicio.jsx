import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { obtenerRecetas } from '../helpers/queries';
import CardReceta from './Receta/CardReceta';
import Swal from 'sweetalert2';

const Inicio = () => {
    const [recetas, setRecetas] = useState([]);
    const [mostrarLoader, setMostrarLoader] = useState(true);
    useEffect(()=>{
        //consulta a la api
        obtenerRecetas().then((respuesta)=>{
            if(respuesta){
                setRecetas(respuesta);
                setMostrarLoader(false);
            }else{
                Swal.fire('Error', 'Intente realizar ésta operación en unos minutos', 'error');
            }
        })
    },[]);
    return (
        <>
            <section className='mainSection'>
                <Container fluid className='px-0'>
                    <img src="../src/assets/fondo01.jpg" alt="" className='img-fluid'/>
                    <h1 className='text-light'>Recetas CTM</h1>
                    <section className='d-flex row m-2 px-2'>
                        {mostrarLoader?
                        <img src="./src/assets/loader-2_food2.gif" className='' alt='loader'/>:
                            recetas.map((receta) => (
                                <CardReceta key={receta.id} receta={receta}></CardReceta>
                            ))
                        }
                    </section>
                </Container>
            </section>
        </>
    );
};

export default Inicio;