import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Elements, StripeProvider } from 'react-stripe-elements';
import Payment from './components/Payment/Payment';
import Loader from 'react-loader-spinner'
import Dropdown from './components/Dropdown/Dropdown';
import 'react-notifications/lib/notifications.css';



class App extends Component {
  state = { loaderVisible: false };
  state = { error: '' };
  setLoader(value,err) {
    this.setState({loaderVisible: value });
    
    this.setState({error: err });
  }
  render() {    
    return (

      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      <div> <div className="text-right">
      <Dropdown/>
      </div>
      <StripeProvider apiKey="pk_test_DN2ZpZcwQEcUTE3Kxa5zyxYA">
        <div className="container my-4 example">  
         
          {this.state.loaderVisible ? <div className="overlay">
            <div className="overlay-center">
              <section className="loderWrapper col-lg-12 col-sm-12 col-lg-offset-6">
                <div>
                  <div className="loader">
                   <Loader type="ThreeDots" color="#fff" height="100" width="100"/>
                  </div>
                </div>
              </section>
            </div>
          </div>: null }
          <h1 className="text-light">React Stripe Elements Example</h1>
          <Elements>
            <Payment {...this.props} setLoader={this.setLoader.bind(this)} />
          </Elements>
        </div>
      </StripeProvider>
      
      </div>
    );
  }
}

export default App;
