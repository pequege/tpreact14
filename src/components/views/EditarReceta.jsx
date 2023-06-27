import React, { useEffect } from 'react';
import { Card, Form, FormGroup, Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { obtenerReceta, editarReceta } from '../helpers/queries';

const EditarReceta = () => {
    const{ register, handleSubmit, formState: { errors }, reset, setValue} = useForm();
    const {id} = useParams();
    const onSubmit =(recetaEditada, id) =>{
        editarReceta(recetaEditada, id).then((respuesta)=>{
            if(respuesta.status === 200){
                Swal.fire('Receta creada', `${recetaEditada.titulo} fue editado correctamente`, 'success');
                reset();
            }else{
                Swal.fire('Ocurrió un error', `${recetaEditada.titulo} no pudo ser editado`, 'error');
            }
        })
    }

    useEffect(()=>{
        obtenerReceta(id).then((respuesta)=>{
            if(respuesta){
                setValue('titulo', respuesta.titulo);
                setValue('descripcion', respuesta.descripcion);
                setValue('ingredientes', respuesta.ingredientes);
                setValue('tiempoPreparacion', respuesta.tiempoPreparacion);
                setValue('imagen', respuesta.imagen);
            }
        })
    }, []);
    return (
        <>
            <Container className='mainSection'>
                <h2 className='text-light m-2'>Editar Receta</h2>
                <Card className="m-2">
                    <Card.Body>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <FormGroup className='mb-2' controlId="titulo-input">
                                <Form.Label>Título</Form.Label>
                                <Form.Control
                                type="text"
                                placeholder="Ej: hamburguejas al vapor..."
                                {...register("titulo", {
                                    required: "El Título es un campo obligatorio "
                                })}
                                />
                                <Form.Text muted>{errors.titulo?.message}</Form.Text>
                            </FormGroup>
                            <FormGroup className='mt-2' controlId="descripcion-input">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control
                                as="textarea"
                                placeholder="Son muy similares a las hamburguesas krusty..."
                                {...register("email", {
                                    max: {
                                    value: 999,
                                    message:
                                        "El máximo de carácteres permitidos para la descripción es 999",
                                    }
                                })}
                                />
                                <Form.Text muted>{errors.descripcion?.message}</Form.Text>
                            </FormGroup>
                            <FormGroup className='mt-2' controlId="ingredientes-input">
                                <Form.Label>Ingredientes <span className='text-secondary'>(separados por comas)</span></Form.Label>
                                <Form.Control
                                as="textarea"
                                placeholder="Pan, hamburgueja, vapor..."
                                {...register("ingredientes", {
                                    required: "Los ingredientes son un campo obligatorio ",
                                    pattern: {
                                    value:
                                        /^([\w\s-]+,)*[\w\s-]+$/,
                                    message:
                                        "Los ingredientes deben estar separados por comas ,"
                                    }
                                })}
                                />
                                <Form.Text muted>{errors.ingredientes?.message}</Form.Text>
                            </FormGroup>
                            <FormGroup className='mt-2' controlId="tiempo-preparacion-input">
                                <Form.Label>Tiempo de preparación <span className='text-secondary'>(en minutos)</span></Form.Label>
                                <Form.Control
                                type='number'
                                placeholder="90 minutos"
                                {...register("tiempoPreparacion", {
                                    min: {
                                        value: 5,
                                        message: "El mínimo de tiempo es 5 minutos"
                                    },
                                    max: {
                                        value: 999,
                                        message: "El máximo de tiempo es 999 minutos"
                                    },
                                    required: "El Tiempo de Preparación es un campo obligatorio ",
                                })}
                                />
                                <Form.Text muted>{errors.tiempoPreparacion?.message}</Form.Text>
                            </FormGroup>
                            <FormGroup className='mt-2' controlId="imagen-input">
                                <Form.Label>Imagen</Form.Label>
                                <Form.Control
                                type='text'
                                placeholder="https:/imagehosting.com/hamburgueja_al_vapor.jpg"
                                {...register("imagen", {
                                    required: "El campo de imagen es obligatorio ",
                                    pattern: {
                                    value:  /(https?:\/\/.*\.(?:png|jpg))/i,
                                    message:
                                        "El formato de la URL de la imagen no es admitido.",
                                    },
                                })}
                                />
                                <Form.Text muted>{errors.imagen?.message}</Form.Text>
                            </FormGroup>
                        
                        <Button className="mt-2" type="submit">
                            Guardar Receta
                        </Button>
                        </Form>
                    </Card.Body>
                    </Card>
            </Container>
        </>
    );
};

export default EditarReceta;