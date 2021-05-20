import React from 'react'
import Proyecto from './Proyecto'


function ListadoProyectos() {

    const proyectos = [
        {nombre: 'Tienda Virtual'},
        {nombre: 'Intranet'},
        {nombre: 'Diseño de Sitio web'}
    ]
    return (
        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto
                    proyecto={proyecto}
                />
            ))}
        </ul>
    )
}

export default ListadoProyectos

