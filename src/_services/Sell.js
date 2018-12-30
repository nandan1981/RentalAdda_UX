import React ,{ Component } from 'react';
import logo from '../logo.svg';
import './Sell.css';


class Sell extends Component{
    constructor(props){
        super(props);
        this.state = {
            isVisible: true
        }
    };

    render() {

        var inlineStyle = {
            display: this.state.isVisible ? "block" : "none"
        };


        return (

            <div className="App">
                <p> {this.props.isVisible}</p>
                <header className="App-header">
                    <p>

                        <button type="button" id="Sell" className="btn btn-lg">Sell</button>
                        <button type="button" id="Rent" className="btn btn-lg">Rent</button>
                    </p>
                    <img src={logo} className="App-logo" alt="logo" style={inlineStyle}  />
                    <p>
                       Sell your product here!!
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React . Build RentalAdda
                    </a>

                </header>
            </div>
        );
    }
}

export default Sell;