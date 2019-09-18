import React from 'react'

const Navegacion = (props) => {
  return ( 
    <div className="py-5 ">
      <button onClick={props.paginaAnterior} type="button" className="btn btn-info mr-1">Anterior &larr; </button>
      <button onClick={props.paginaSiguiente}type="button" className="btn btn-info ">Siguiente &rarr; </button>
    </div>
   );
}
 
export default Navegacion;
