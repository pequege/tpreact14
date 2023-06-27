const URL_usuario = import.meta.env.VITE_API_USUARIO;
const URL_receta = import.meta.env.VITE_API_RECETA;

export const iniciarSesion = async(usuario) =>{
    try {
        const respuesta = await fetch(URL_usuario);
        const listaUsuario = await respuesta.json();
        const usuarioBuscado = listaUsuario.find((itemUsuario)=> itemUsuario.email === usuario.email);
        if(usuarioBuscado){
            if(usuarioBuscado.password === usuario.password){
                return usuarioBuscado;
            }else{
                console.log('contraseña incorrecta');
                return null;
            }
        }else{
            console.log('el email no existe');
            return null;
        }
    } catch (error) {
        
    }
}

export const obtenerRecetas = async() =>{
    try {
        const respuesta = await fetch(URL_receta);
        const listaRecetas = await respuesta.json();
        return listaRecetas;
    } catch (error) {
        console.log(error);
    }
}

export const obtenerReceta = async(id) =>{
    try {
        const respuesta = await fetch(URL_receta + "/" + id);
        const receta = await respuesta.json();
        return receta;
    } catch (error) {
        console.log(error);
    }
}

export const crearReceta = async(receta) =>{
    try {
        const respuesta = await fetch(URL_receta ,{
            method: "POST",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(receta)
        });
        return respuesta;
    } catch (error) {
        console.log(error);
    }
}

export const editarReceta = async(receta, id) =>{
    try {
        const respuesta = await fetch(URL_receta + "/" + id ,{
            method: "PUT",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(receta)
        });
        return respuesta;
    } catch (error) {
        console.log(error);
    }
}

export const borrarRecetas = async(id) =>{
    try {
        const respuesta = await fetch(URL_receta + "/" + id ,{
            method: "DELETE",
        });
        return respuesta;
    } catch (error) {
        console.log(error);
    }
}