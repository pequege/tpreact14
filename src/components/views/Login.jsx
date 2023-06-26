import React from "react";
import { Button, Card, Container, Form, FormGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { iniciarSesion } from "../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = ({setUsuariologgeado}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navegacion = useNavigate();
  
  const onSubmit = (usuario) => {
    console.log(usuario);
    iniciarSesion(usuario).then((respuesta) =>{
      if(respuesta){
        sessionStorage.setItem('usuario', JSON.stringify(respuesta));
        setUsuariologgeado(respuesta);
        reset();
        navegacion('/administrador');
      }else{
        Swal.fire(
          'Error',
          'Email o contraseña son incorrectos',
          'error'
        )
      }
    })
  };

  return (
    <>
      <Container className="mainSection">
        <Card className="m-2">
          <Card.Header>Login</Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup controlId="email-input">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ej: email@dominio.com"
                  {...register("email", {
                    required: "El email es un campo obligatorio ",
                    pattern: {
                      value:
                        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=? ^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a -z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                      message:
                        "El mail debe tener el siguiente formato: mail@dominio.com",
                    },
                  })}
                />
                <Form.Text muted>{errors.email?.message}</Form.Text>
              </FormGroup>
              <FormGroup controlId="password-input">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  {...register("password", {
                    required: "La contraseña es un campo obligatorio ",
                    pattern: {
                      value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                      message:
                        "El password debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. No puede tener otros símbolos.",
                    },
                  })}
                />
                <Form.Text muted>{errors.password?.message}</Form.Text>
              </FormGroup>
              <Button className="mt-2" type="submit">
                Log in
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Login;
