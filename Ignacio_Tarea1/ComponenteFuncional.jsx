import React from "react";

const ComponenteFuncional = (props) =>{
    return(
        <div>
            <h1>{props.saludo}</h1>
            <h2>{props.mensaje}</h2>
        </div>
    )
}

export default ComponenteFuncional;