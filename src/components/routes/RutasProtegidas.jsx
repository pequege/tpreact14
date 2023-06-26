import React from 'react';
import { Navigate } from 'react-router-dom';

const RutasProtegidas = ({children}) => {
    //children: rutas hijas
    const usuariologgeado = JSON.parse(sessionStorage.getItem('usuario')) || null;
    if(!usuariologgeado){
        return <Navigate to='/login'></Navigate>
    }else{
        return children;
    }
};

export default RutasProtegidas;