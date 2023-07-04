import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardTarjeta = ({receta}) => {
  return (
    <>
      <Card className="col-sm-12 col-md-4 col-lg-3 m-2 px-0">
        <Card.Img variant="top" src={receta.imagen} />
        <Card.Body>
          <Card.Title>{receta.titulo}</Card.Title>
          <Card.Text>{receta.descripcion}</Card.Text>
          <Button
            as={Link}
            variant="outline-danger"
            to={"/detalle/" + receta.id}
            className="fw-bold"
          >
            Ver receta
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardTarjeta;
