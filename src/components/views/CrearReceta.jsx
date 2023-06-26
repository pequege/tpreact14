import React from 'react';
import { Card, Form, FormGroup, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const CrearReceta = () => {
    const{ register, handleSubmit, formState: { errors }, reset} = useForm();
    const onSubmit = () =>{

    }
    return (
        <>
            <section className='mainSection'>
                <h2 className='text-light m-2'>Crear Receta</h2>
                <Card className="m-2">
                    <Card.Body>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <FormGroup className='mb-2' controlId="email-input">
                                <Form.Label>Título</Form.Label>
                                <Form.Control
                                type="text"
                                placeholder="Ej: hamburguejas al vapor..."
                                {...register("titulo", {
                                    required: "El Título es un campo obligatorio ",
                                    pattern: {
                                    value:
                                        /a/,
                                    message:
                                        "El mail debe tener el siguiente formato: mail@dominio.com",
                                    },
                                })}
                                />
                                <Form.Text muted>{errors.titulo?.message}</Form.Text>
                            </FormGroup>
                            <FormGroup className='mt-2' controlId="email-input">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control
                                as="textarea"
                                placeholder="Son muy similares a las hamburguesas krusty..."
                                {...register("email", {
                                    required: "El Título es un campo obligatorio ",
                                    pattern: {
                                    value:
                                        /a/,
                                    message:
                                        "El mail debe tener el siguiente formato: mail@dominio.com",
                                    },
                                })}
                                />
                                <Form.Text muted>{errors.email?.message}</Form.Text>
                            </FormGroup>
                            <FormGroup className='mt-2' controlId="email-input">
                                <Form.Label>Ingredientes <span className='text-secondary'>(separados por comas)</span></Form.Label>
                                <Form.Control
                                as="textarea"
                                placeholder="Pan, hamburgueja, vapor..."
                                {...register("email", {
                                    required: "El Título es un campo obligatorio ",
                                    pattern: {
                                    value:
                                        /a/,
                                    message:
                                        "El mail debe tener el siguiente formato: mail@dominio.com",
                                    },
                                })}
                                />
                                <Form.Text muted>{errors.email?.message}</Form.Text>
                            </FormGroup>
                            <FormGroup className='mt-2' controlId="email-input">
                                <Form.Label>Tiempo de preparación</Form.Label>
                                <Form.Control
                                type='number'
                                placeholder="90 minutos"
                                {...register("email", {
                                    required: "El Título es un campo obligatorio ",
                                    pattern: {
                                    value:
                                        /a/,
                                    message:
                                        "El mail debe tener el siguiente formato: mail@dominio.com",
                                    },
                                })}
                                />
                                <Form.Text muted>{errors.email?.message}</Form.Text>
                            </FormGroup>
                            <FormGroup className='mt-2' controlId="email-input">
                                <Form.Label>Imagen</Form.Label>
                                <Form.Control
                                type='text'
                                placeholder="https:/imagehosting.com/hamburgueja_al_vapor.jpg"
                                {...register("email", {
                                    required: "El Título es un campo obligatorio ",
                                    pattern: {
                                    value:
                                        /a/,
                                    message:
                                        "El mail debe tener el siguiente formato: mail@dominio.com",
                                    },
                                })}
                                />
                                <Form.Text muted>{errors.email?.message}</Form.Text>
                            </FormGroup>
                        
                        <Button className="mt-2" type="submit">
                            Log in
                        </Button>
                        </Form>
                    </Card.Body>
                    </Card>
            </section>
        </>
    );
};

export default CrearReceta;