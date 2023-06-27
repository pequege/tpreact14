import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemReceta = ({receta}) => {
  return (
    <tr>
      <td>{receta.titulo}</td>
      <td>{receta.descripcion}</td>
      <td>{receta.ingredientes}</td>
      <td>{receta.tiempo_preparacion}</td>
      <td>{receta.imagen}</td>
      <td>
        <Link
          className="btn btn-warning mx-1"
          to={"/administrador/editar-receta/" + receta.id}
        >
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" className="mx-1">
          <i className="bi bi-x-square-fill"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
