
import React from "react";
import { Switch } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Alert} from 'react-bootstrap';



class Check extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = {usdtosar: props.usd,
                        usdtopkr : ''
    }
        this.state = { sartousd : '',
                        sartopkr : ''

        }
        this.state = { pkrtousd : '',
                        pkrtosar : ''

        }
        this.handleChangeusdto = this.handleChangeusdto.bind(this);
        this.handleChangesarto = this.handleChangesarto.bind(this);
        this.handleChangepkrto = this.handleChangepkrto.bind(this);
    }
        
    handleChangeusdto (e) {
        this.setState( {usdtosar : (e.target.value * 3.75)});
        this.setState( {usdtopkr : (e.target.value * 150.93)});
        //this.setState(state.usdtosar : Switch (input.value.USD))
    }

    handleChangesarto (e) {
        this.setState({sartousd :(e.target.value / 3.75)});
        this.setState({sartopkr : (e.target.value * 150.93)});
    }

    handleChangepkrto(e) {
        this.setState({pkrtousd : e.target.value * 0.0066});
        this.setState({pkrtosar : e.target.value / 40.60});
    }

    render () {
        return (
            <div>
                <div>
                <label for="fname">Enter USD:</label>
                <input name = 'USD' placeholder = {this.state.sartousd} onChange = {this.handleChangeusdto}/>
                </div>
                <br/>
                <div className = 'containter'>
                Enter SAR <input name = 'SAR' placeholder = {this.state.usdtosar} onChange = {this.handleChangesarto}/>
                </div>
                <br/>
                <div className = 'containter'>
                Enter PKR <input name = 'PKR' placeholder = {this.state.usdtopkr} onChange = {this.handleChangepkrto}/>
                </div>
                
                <div>
                   <table className = 'table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Info</th>
                        </tr>
                    </thead>
                    </table>

                   
                </div>

            </div>
        )
    }
}

export default Check;