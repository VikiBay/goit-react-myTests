import { Component } from "react";
import {Wrapper} from './Counter.styled'

export class Counter extends Component {
    state = {
        value: 0,
    }

    handleIncrement= ()=> {
 this.setState(prevState => ({value: prevState.value+1}))
    }

    handleDecrement = () =>{
        console.log('Click on Decrement')
        console.log(this) 
    }

render(){
    return(
<Wrapper>
        <span className="Counter_value">{this.state.value}</span>
        <div>
            <button type="button" onClick={this.handleDecrement}>Minus 1</button>
            <button type="button" onClick={this.handleIncrement}>Add 1</button>
        </div>
    </Wrapper>
    )
}
}



