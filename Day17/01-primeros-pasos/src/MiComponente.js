import React from "react";

const MiComponente = () => {

    let usuario = {
        nombre: 'pedro',
        apellidos: 'ornelas',
        web: 'www.pedro.es'
    }

    return (
        <>
            <h2>holaaaa</h2>
            <h3>Datos del usuario:</h3>
            <ul>
                <li>
                    Nombre:  <strong>{ usuario.nombre }</strong>
                </li>
                <li>
                    web: { usuario.web }
                </li>
            </ul>

        <p>Este es mi primer componente</p>
        </>
    )
}

export default MiComponente