import React from "react";
import { Button } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { borrarReceta } from "../../helpers/queries";
import Swal from "sweetalert2";

const ItemReceta = ({receta, recetas, setRecetas}) => {
  const handleBorrarReceta = () =>{
    console.log(receta.id)
    Swal.fire({
      title: `¿Desear borrar "${receta.titulo}"?`,
      showCancelButton: true,
      confirmButtonText: 'Borrar',
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        borrarReceta(receta.id).then((result)=>{
          if(result.status === 200){
            //actualizar tabla recetas
            actualizarRecetas();
          }
        })
        Swal.fire('Receta borrada', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

  const actualizarRecetas = () => {
    const nuevasRecetas = recetas.filter(
      (recetaFiltrada) => recetaFiltrada !== receta
    );
    setRecetas(nuevasRecetas);
  };
  return (
    <tr>
      <td>{receta.titulo}</td>
      <td>{receta.descripcion}</td>
      <td>{receta.ingredientes}</td>
      <td>{receta.tiempoPreparacion}</td>
      <td>{receta.imagen}</td>
      <td>
        <Link
          className="btn btn-warning mx-1"
          to={"/administrador/editar-receta/" + receta.id}
        >
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" className="mx-1" onClick={handleBorrarReceta}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
