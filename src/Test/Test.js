
import React from "react";





class Test extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            contador: 0,
            otraVariable: "cualquiercosa" 
        }
    }

    handleClick = () => {
        this.setState({
            contador: this.state.contador + 1
        })
    }

    render(){
        return (
            <>
                <p>{this.state.contador}</p>
                <button onClick={this.handleClick}> click me </button>
            </>
        )
    }

}

export default Test;