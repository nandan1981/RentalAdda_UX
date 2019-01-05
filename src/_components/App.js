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
          isShowRentPage : false
    }
    this.enableMainPage = this.enableMainPage.bind(this);
     this.enableBuyPage = this.enableBuyPage.bind(this);
     this.enableRentPage = this.enableRentPage.bind(this);
  };

  componentDidMount() {
      // client({
      //     method:'GET',path:'/rentalAdda/home'}).done( response => this.setState())
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
        var Page = null;

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
                <div className="Buy">
                    <p> {this.props.isVisible}</p>
                    <header>
                        <form>
                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control mb-2 mr-sm-2" id="inputPassword3"
                                           placeholder="Password" />
                                </div>
                            </div>
                            <fieldset className="form-group">
                                <div className="row">
                                    <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                                    <div className="col-sm-10">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gridRadios"
                                                   id="gridRadios1" value="option1" checked />
                                            <label className="form-check-label" htmlFor="gridRadios1">
                                                First radio
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gridRadios"
                                                   id="gridRadios2" value="option2" />
                                            <label className="form-check-label" htmlFor="gridRadios2">
                                                Second radio
                                            </label>
                                        </div>
                                        <div className="form-check disabled">
                                            <input className="form-check-input" type="radio" name="gridRadios"
                                                   id="gridRadios3" value="option3" disabled />
                                            <label className="form-check-label" htmlFor="gridRadios3">
                                                Third disabled radio
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <div className="form-group row">
                                <div className="col-sm-2">Checkbox</div>
                                <div className="col-sm-10">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                        <label className="form-check-label" htmlFor="gridCheck1">
                                            Example checkbox
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-10">
                                    <button type="submit" className="btn btn-primary">Sign in</button>
                                </div>
                            </div>
                        </form>
                    </header>
                    <button type="button" id="mainPage" className="btn" onClick={this.enableMainPage}>back
                    </button>
                </div>

            );
        }else if (rentPage){
          Page = (
                <div  className="Rent">
                    <header className="App-header">
                        <form>
                            <div>
                                <h2> Rent a Product</h2>
                                <input type='Product Title' className="mm-popup__box__header__title" placeholder='Enter Title' required/>
                                <div>
                                    <button type="submit" className="btn btn-sm">Submit</button>
                                </div>
                            </div>
                            <button type="button" id="mainPage" className="btn" onClick={this.enableMainPage}>back
                            </button>
                        </form>
                    </header>

                </div>
            );
        }

            return( <div>
                {Page}
            </div> );

        }

}

export default App;
