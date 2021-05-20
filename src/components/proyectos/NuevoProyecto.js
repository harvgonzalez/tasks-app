import React, { Fragment, useState } from 'react'

function NuevoProyecto() {

    // state pare el proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    })

    // Extraer nombre de proyecto

    const { nombre } = proyecto

    // Lee los contenidos del input
    const onChangeProyecto = e =>{
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    // Cuando el usuario envia un protecto
    const onSubmitProyecto = e => {
        e.prevent.default()

        // validar el proyecto

        // agregar el state

        // Reiniciar el form
    }
    return (
        <Fragment>
            <button 
                type="button"
                className="btn btn-block btn-primario"
            >Nuevo Proyecto</button>

            <form
                className="formulario-nuevo-proyecto"
                onSubmit={onSubmitProyecto}
            >
                <input 
                    type="text"
                    className="input-text"
                    placeholder="Nombre Proyecto"
                    name="nombre"
                    value={nombre}
                    onChange={onChangeProyecto}
                />

                <input 
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Agregar Proyecto"
                />

            </form>
        </Fragment>
    )
}

export default NuevoProyecto
