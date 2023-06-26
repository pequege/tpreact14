import React from 'react';
import { Container } from 'react-bootstrap';

const Inicio = () => {
    return (
        <>
            <section className='mainSection'>
                <Container fluid className='px-0'>
                    <img src="../src/assets/fondo01.jpg" alt="" className='img-fluid'/>
                </Container>
                <h1>Recetas CTM</h1>
            </section>
        </>
    );
};

export default Inicio;