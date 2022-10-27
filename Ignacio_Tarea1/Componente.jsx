import React, {Component} from "react";
import ComponenteFuncional from "./ComponenteFuncional";
class Componente extends Component{
    constructor(props){
        super(props)
    }

    render() {
        const { saludo } = this.props
        return(
            <div>
                <h1>{saludo.hello}</h1>
                <ComponenteFuncional mensaje={saludo.elemento}/>
            </div>
        )
    }
}

export default Componente