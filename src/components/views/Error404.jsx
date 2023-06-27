import React from 'react';
import { Container } from 'react-bootstrap';

const Error404 = () => {
    return (
        <>
            <Container className='mainSection'>
                <img src="/src/assets/error404.jpg" alt="error 404" className='img-fluid'/>
            </Container>
        </>
    );
};

export default Error404;