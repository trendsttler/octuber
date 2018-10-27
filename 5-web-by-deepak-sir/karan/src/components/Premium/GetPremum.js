import React, { Component } from 'react';
import './Premium.css';
import circle from '../../circle.svg';
import Dropdown from '../../components/Dropdown/Dropdown';
import * as loginService from '../../services/loginService';
import { Observable } from 'rxjs/Rx';
import PremiumModel from '../../Model/GetPremiummodel';
import {NotificationContainer, NotificationManager} from 'react-notifications';



class GetPremium extends Component {

    constructor(props) {
        super(props);
        this.state = {
            premium_value: new PremiumModel()
        }
        
        var valid_time= localStorage.getItem('token');
        console.log('check valid',valid_time)
        // const timestampvalue = valid_time/ 1000 
        // let token_time = parseInt(timestampvalue)

        if(valid_time !==null){
        let call = Observable.interval(240000);
        call.subscribe(() => {
            this.refreshToken();
        });
    }
    }
    refreshToken() {
        
        var refreshtoken = localStorage.getItem('refreshtoken')
        loginService.getUpdateToken({ refresh_token: refreshtoken }).then(res => {
          console.log('check refresh result',res)
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('refreshtoken', res.data.refresh_token);
        })
    }

    goPayment() {
        var get_token = localStorage.getItem('token')
        loginService.getSubDetail({ token: get_token }).then(res => {
            if (res.data.subscribe_Id) {
                this.props.history.push('/subscribe')

            } else {
                this.props.history.push('/payment')
            }
        }).catch((error) => {
            this.state.premium_value.errormsg = error.response.data.error;            
            this.setState({premium_value: this.state.premium_value});
            NotificationManager.error( this.state.premium_value.errormsg);
            
        })

    }
    goProfile() {
        this.props.history.push('/profile')
    }

    render() {
        return (
            <body style={{backgroundColor: "#fff",height: "100%"}}>
                <div className="text-right">
                <Dropdown/>
                </div>
            {/* <style>
                body{
                    background-color: #fff; 
                }
            </style> */}

            <div className="container text-center mt-5">           
                    
                <h2>take control of your music With premium</h2>
                <p><button className="btn btn-premium submit mt-5 mb-3" onClick={this.goPayment.bind(this)}>GET PREMIUM</button></p>
              
                <p ><span className="terms">Terms and Conditions applied.</span><span ><p className="terms-link" >Learn more</p></span></p>
                <hr className="devider my-5" />
                <div className="my-5">
                    <h4 className="my-5">Here's What you get:</h4>
                    <div className="row" >
                        <div className="col-sm-6 col-lg-3">
                            <img alt='xzczx' src={circle} className="feature" />
                            <h4>Lorem ipsum doller</h4>
                            <p>Lorem, ipsum dolor sit amet consectetu
                                 adipisicing elit. Molestiae harum, ab, accusamus
                                 magnamue! Ad, quibusdam?
                </p>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <img alt='czx' src={circle} className="feature" />
                            <h4>Lorem ipsum doller</h4>
                            <p>Lorem, ipsum dolor sit amet consectetu
                                 adipisicing elit. Molestiae harum, ab, accusamus
                                 magnamue! Ad, quibusdam?
                </p>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <img alt='xczx' src={circle} className="feature" />
                            <h4>Lorem ipsum doller</h4>
                            <p>Lorem, ipsum dolor sit amet consectetu
                                 adipisicing elit. Molestiae harum, ab, accusamus
                                 magnamue! Ad, quibusdam?
                </p>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <img alt='xzcz' src={circle} className="feature" />
                            <h4>Lorem ipsum doller</h4>
                            <p>Lorem, ipsum dolor sit amet consectetu
                                 adipisicing elit. Molestiae harum, ab, accusamus
                                 magnamue! Ad, quibusdam?
                </p>
                        </div>

                    </div>
                </div>
            </div>
            <NotificationContainer/>
            </body>
        )
    }
}

export default GetPremium;
