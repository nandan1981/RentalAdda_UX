import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
          isVisible: true,
          isShowMainPage : true,
           isShowBuyPage : false,
          isShowRentPage : false,
            pictures:[]
    }
    this.enableMainPage = this.enableMainPage.bind(this);
     this.enableBuyPage = this.enableBuyPage.bind(this);
     this.enableRentPage = this.enableRentPage.bind(this);
  };

  componentDidMount() {
      fetch('http://localhost:8082/RentalAddaRest/customers.htm')
          .then(customers => {
              return customers.json();
          }).then(data => {
          let pictures = data.customers.map((pic) => {
              return (
                  <div key={pic.customers}>
                      <img src={pic.picture.medium}/>
                  </div>
              )
          })
          this.setState({pictures: pictures});
      })
  }

    enableMainPage(){
        this.setState({isShowMainPage: true,
            isShowBuyPage: false,
            isShowRentPage: false});
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

    render() {
        var inlineStyle = {display: this.state.isVisible ? "block" : "none" };
        let mainPage = this.state.isShowMainPage;
        let buyPage = this.state.isShowBuyPage;
        let rentPage = this.state.isShowRentPage;
        let Page = null;

        if(mainPage){

             Page = (
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
                    </header>
                </div>
            );
        }else if(buyPage){
            Page = (
                <div className="Buy align-middle text-white">
                    <p> {this.props.isVisible}</p>
                    <header>
                        <form>
                            <div className="form-group row">
                                <br/><br/>
                                <p>Select category to buy</p>
                                <select className="row">
                                    <option value="action cameras">Action Cameras</option>
                                    <option value="consoles">Consoles</option>
                                    <option value="games">Games</option>
                                    <option value="drones">Drones</option>
                                </select>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label ">Search</label>
                                <div className="col-sm-2">
                                    <input type="email" className="form-control " id="inputEmail3" placeholder="Search" />
                                </div>
                            </div>
                            <p>Available Products</p>
                            {this.state.pictures}
                        </form>
                    </header>
                    <button type="button" id="mainPage" className="btn" onClick={this.enableMainPage}>back
                    </button>
                </div>

            );
        }else if (rentPage){
          Page = (
              <div  className="Container2">
                <div  className="Container1">
                    {/*<header className="App-header">*/}
                        {/*<form>*/}
                        {/*<div>*/}
                            {/*<h2> Rent a Product</h2>*/}
                            {/*<input type='Product Title' className="mm-popup__box__header__title" placeholder='Enter Title' required/>*/}
                            {/*<div>*/}
                                {/*<button type="submit" className="btn btn-sm">Submit</button>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<button type="button" id="mainPage" className="btn btn-primary" onClick={this.enableMainPage}>back*/}
                        {/*</button>*/}
                    {/*</form>*/}
                    {/*</header>*/}
                    {this.state.pictures}
                </div>
                </div>
            );
        }

            return( <div>
                {Page}
            </div> );

        }

}

export default App;
