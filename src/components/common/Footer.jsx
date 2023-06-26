import React from 'react';

const Footer = () => {
    return (
        <footer className='text-center bg-dark text-light py-4'>
        <h5>2023 &copy; Todos los derechos reservados</h5>
        <p className='text-secondary'>
        By <a href="https://github.com/pequege" className='link-secondary text-decoration-none' target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i> Gerardo Mansilla</a>
        </p>
      </footer>
    );
};

export default Footer;