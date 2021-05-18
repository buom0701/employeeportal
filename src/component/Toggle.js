import { Component } from "react";

class Toggle extends Component {
    
    constructor (props) {
        super(props);
        this.state = {isToggleOn : true };
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState((state) => ({isToggleOn : !this.state.isToggleOn})
        )};

    render() {
       return (
        <button onClick= {this.handleClick}>
            Button is {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>

       );
     
    }

}

export default Toggle;