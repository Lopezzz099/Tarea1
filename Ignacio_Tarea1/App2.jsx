import React, { Fragment } from 'react'
import Componente from './Componente'
import ComponenteFuncional from './ComponenteFuncional'

const App2 = () => {
    const greeting = {
        hello: "Soy componente de clase",
        elemento: "Soy un props de componente funcional",
        elemento2: "Soy otro props de componente funcional"
    }
    return (
    <Fragment>
        <Componente saludo={greeting}/>
        <ComponenteFuncional saludo={greeting.elemento2}/>
    </Fragment>
    )
}

export default App2