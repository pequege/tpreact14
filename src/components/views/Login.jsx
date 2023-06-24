import React from 'react';
import { Button, Card, Container, Form, FormGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, formState: {errors}, reset } = useForm()

    const onSubmit = ( usuario ) =>{
        console.log(usuario);
    }

    return (
        <>
            <Container className='mainSection'>
                <Card className='m-2'>
                    <Card.Header>Login</Card.Header>
                    <Card.Body>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <FormGroup controlId='email-input'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                type='email'
                                placeholder='Ej: email@dominio.com'
                                {...register('email',{
                                    required: 'El email es un campo obligatorio ',
                                    pattern: {
                                        value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=? ^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a -z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                                        message: 'El mail debe tener el siguiente formato: mail@dominio.com'
                                    }
                                })}/>
                                <Form.Text muted>
                                    {errors.email?.message}
                                </Form.Text>
                            </FormGroup>
                            <FormGroup controlId='password-input'>
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control
                                type='password'
                                placeholder='Contraseña'
                                {...register('password',{
                                    required: 'La contraseña es un campo obligatorio ',
                                    pattern: {
                                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                                        message: 'La contraseña debe tener entre 8 y 16 caracteres, al menos 1 digito ...'
                                    }
                                })}/>
                                <Form.Text muted>
                                    {errors.password?.message}
                                </Form.Text>
                            </FormGroup>
                            <Button className='mt-2' type='submit'>Log in</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default Login;