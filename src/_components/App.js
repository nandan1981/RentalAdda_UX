import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import PropsTest from './PropsTest'
//import client from './client'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
          isVisible: true,
          isShowMainPage : true,
           isShowBuyPage : false,
          isShowRentPage : false
    }
    this.enableBuyPage = this.enableBuyPage.bind(this);
    this.enableRentPage = this.enableRentPage.bind(this);
  };

  componentDidMount() {
      // client({
      //     method:'GET',path:'/rentalAdda/home'}).done( response => this.setState())
  }

    enableRentPage(){
        this.setState({isShowMainPage: false,
            isShowBuyPage: false,
            isShowRentPage: true});
    }

    enableBuyPage(){
        this.setState({isShowMainPage: false,
            isShowBuyPage: true,
            isShowRentPage: false});
    }

    buyPage(){
        return (
            <div className="App">

                <header className="App-header">
                    <form>
                        <div className="App">
                            <h2> Buy a Product</h2>
                            <input type='Product Title' className="mm-popup__box__header__title" placeholder='Enter Title' required/>
                            <div>
                                <button type="submit" className="btn btn-sm">Submit</button>
                            </div>
                        </div>
                    </form>
                </header>
            </div>
        );
    }

    rentPage(){
        return (
            <div className="App">

                <header className="App-header">
                    <form>
                        <div className="App">
                            <h2> Rent a Product</h2>
                            <input type='Product Title' className="mm-popup__box__header__title" placeholder='Enter Title' required/>
                            <div>
                                <button type="submit" className="btn btn-sm">Submit</button>
                            </div>
                        </div>
                    </form>
                </header>
            </div>
        );
    }

    render() {

        var inlineStyle = {display: this.state.isVisible ? "block" : "none" };
            const mainPage = (
                <div className="App">


                    <p> {this.props.isVisible}</p>
                    <header className="App-header">
                        <p>

                            <button type="button" id="Buy" className="btn btn-lg" onClick={this.enableBuyPage}>Buy
                            </button>
                            <button type="button" id="Rent" className="btn btn-lg" onClick={this.enableRentPage}>Rent
                            </button>
                        </p>
                        <img src={logo} className="App-logo" alt="logo" style={inlineStyle}/>
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React . Build RentalAdda
                        </a>
                        <PropsTest/>
                    </header>
                </div>
            );

            return( <div>
                {this.state.isShowBuyPage ? this.buyPage() : mainPage}
                {this.state.isShowMainPage ? mainPage : this.buyPage()}
                {this.state.isShowRentPage ? this.rentPage() : mainPage}
            </div> );

        }

}

export default App;
