import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.scss';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
          isVisible: true,
          isShowMainPage : true,
          isShowBuyPage : false,
          isShowRentPage : false,
          isShowSignUpPage : false,
            pictures:[],
            information:[]
    }
     this.appUrl="http://localhost:9202";
     this.enableMainPage = this.enableMainPage.bind(this);
     this.enableBuyPage = this.enableBuyPage.bind(this);
     this.enableRentPage = this.enableRentPage.bind(this);
     this.showSignUpPage = this.showSignUpPage.bind(this);
     this.showNavHeader = this.showNavHeader.bind(this);
  };

  componentDidMount() {
      fetch(this.appUrl+'/fetchRentalData/Nandan', {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "no-" +
          "cors", // no-cors, cors, *same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
              "Content-Type": "application/json",
              // "Content-Type": "application/x-www-form-urlencoded",
          },
          redirect: "follow", // manual, *follow, error
          referrer: "no-referrer", // no-referrer, *client
       });//.then(results => {
      //     return results.json();
      // }).then(data => {
      //     let output = data.results.map((names) => {
      //         return(
      //             <p>{names.firstName}</p>
      //         )
      // })

      //this.setState({pictures: output});
    //})
  }

    enableMainPage(){
        this.setState({isShowMainPage: true,
            isShowBuyPage: false,
            isShowRentPage: false,
        isShowSignUpPage:false});
    }

    showRentalAddaInformation(string){
        fetch( this.appUrl+ '/fetchRentalInformation/'+string, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(result=>result.json())
            .then(information=>this.setState({information}))

    }

    enableRentPage(){
        this.setState({isShowMainPage: false,
            isShowBuyPage: false,
            isShowRentPage: true,
            isShowSignUpPage:false});
    }

    enableBuyPage(){
        this.setState({isShowMainPage: false,
            isShowBuyPage: true,
            isShowRentPage: false,
            isShowSignUpPage:false});
    }

    showSignUpPage(){
        this.setState({isShowMainPage: false,
            isShowBuyPage: false,
            isShowRentPage: false,
            isShowSignUpPage:true});
    }

    openPopupLogin(){
        var win = window.open('https://localhost:8048/LoginPopup','signup','height=400,width=400,top=400,left=600,toolbar=no,scrollbars=no,status=no,titlebar=no,menubar=no,location=no');
        if (window.focus) {
            win.focus()}
        return false;
    }

    showNavHeader(){
        return (  <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <img src={process.env.PUBLIC_URL +'/logo_nodesc.png'} className="logo"/>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><a href="#" onClick={this.enableMainPage}>Home</a></li>
                    <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown"
                                                href="#"><span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Why Us?</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Products</a></li>
                </ul>
                <form className="navbar-form navbar-left" action="/action_page.php">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search the entire website"
                               name="search"></input>
                        <div className="input-group-btn">
                            <button className="btn btn-default" type="submit">
                                <i className="glyphicon glyphicon-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
                <div className="navbar-header"
                     className="navbar-header-buy">RENTALADDA
                    <ul className="nav navbar-nav navbar-right">
                        <li ><a href="#" onClick={this.showSignUpPage}><span
                            className="glyphicon"></span> Sign Up</a></li>
                        <li><a href="#" onClick={this.openPopupLogin}><span
                            className="glyphicon glyphicon-log-in"></span> Login</a></li>
                        <li><a href="#"><span className="glyphicon glyphicon-user"></span> My
                            Profile</a></li>
                    </ul>
                </div>

            </div>
        </nav>);
    }

    render() {
        var inlineStyle = {display: this.state.isVisible ? "block" : "none" };
        let mainPage = this.state.isShowMainPage;
        let buyPage = this.state.isShowBuyPage;
        let rentPage = this.state.isShowRentPage;
        let showSignUpPage = this.state.isShowSignUpPage;
        let Page = null;

        if(mainPage){
             Page = (
                <div className="App">
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
                <div className="Buy align-middle text-white ">
                    <header>
                        <form>
                            <div className="form-group row">
                                <p>Select category to buy</p>
                                <select className="row">
                                    <option value="action cameras">Action Cameras</option>
                                    <option value="consoles">Consoles</option>
                                    <option value="games">Games</option>
                                    <option value="drones">Drones</option>
                                </select>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="search" className="col-sm-2 col-form-label ">Search</label>
                                <div className="col-sm-2">
                                    <input type="text" className="form-control " id="searchbox" placeholder="Search" />
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
              <div className="Rent align-middle text-white">
                  <p> {this.props.isVisible}</p>
                  <header>
                      <form>
                          <div className="form-group row">
                              <p>Select category to rent</p>
                              <select className="row">
                                  <option value="action cameras">Action Cameras</option>
                                  <option value="consoles">Consoles</option>
                                  <option value="games">Games</option>
                                  <option value="drones">Drones</option>
                              </select>
                          </div>
                          <div className="form-group row">
                              <label htmlFor="search" className="col-sm-2 col-form-label ">Search</label>
                              <div className="col-sm-2">
                                  <input type="text" className="form-control " id="searchbox" placeholder="Search" />
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
        }else if(showSignUpPage){
          Page=( <div className="Rent align-middle text-white">
                Sign Up
            </div>);
        }

            return( <div>
                {this.showNavHeader()}
                {Page}
            </div> );

        }

}

export default App;
