import './form.css'
import React from 'react'
import Input from '../Input/input.js';
import Select from '../Select/select.js';
import Button from '../Button/button.js';


class Form extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            
            marca: [
                {name: "Ford", id: 1},
                {name: "Toyota", id: 2}
                ],
            modelo: [
                {name: "F-150", id: 1},
                {name: "Supra", id: 2}
                    ],
            year: 0,
            plate: "",
            brand: "",
            model: ""    
        }
     

        const handleChange = (event) => {
            this.setState({
                model: event.target.value
            })
            console.log(this.state)
        }
    }

    render() {

    
        
        return (
            <div className='fondoForm'>
                <Input titulo= "Agregar patente" type="text" />
                <Input titulo= "Agregar Anio" type="number" />

                <Select change={this.handleChange} name="marca" items={this.state.marca} />
                <Select change={this.handleChange} name="modelo" items={this.state.modelo} />
                <Button />
                
            </div>
        )
    }

}

export default Form