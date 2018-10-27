import React, { Component } from 'react';
// import logo from './logo.svg';
import './Login.css';
import LoginModel from '../../Model/loginModel'
import * as loginService from '../../services/loginService';
import {NotificationContainer, NotificationManager} from 'react-notifications';
// var errormsg
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login_value: new LoginModel()
        }

    }
    goForget() {
        this.props.history.push('/forget-password')
    }
    loginHandler(event) {
        let value = {};
        value[event.target.name] = event.target.value;
        this.setState({ login_value: { ...this.state.login_value, ...value } });

    }
    onLogin() {
       
        loginService.loggin({ email: this.state.login_value.user_email, password: this.state.login_value.user_password }).then(res => {
            if (res) {
                localStorage.setItem('token', res.data.token);
                this.state.login_value.logedIn = true;
                var local = localStorage.getItem('token');
                localStorage.setItem('refreshtoken', res.data.refresh_token);
                localStorage.setItem('time', res.data.valid);

                if (local) {
                    this.props.history.push('/get-premium')
                }
            }
        }).catch((error) => {
            this.state.login_value.errormsg = error.response.data.error;            
            this.setState({login_value: this.state.login_value});
             NotificationManager.error( this.state.login_value.errormsg);
            
        })
    }

    render() {
        return (
            
            <div className="body">
                <div className="container">
                    <div className="p-3 text-light">                
                 
                        <div className="form-group text-center mx-auto" style={{marginTop: "10%"}}>
                        
                            <div  className="logo-login">hipster</div>
                            <div>
                                <div class="input-container my-4">
                                    <i class="fa fa-user icon"></i>
                                    <input class="input-field" type="text"  placeholder="User ID" name='user_email' value={this.state.login_value.user_email} onChange={this.loginHandler.bind(this)}/>
                                </div>
                                {/*  <div><input name='user_email' value={this.state.login_value.user_email} onChange={this.loginHandler.bind(this)} className="input-field my-3" type="text" placeholder="User ID" /></div> */}
                                {/* <div classNmae="input-container"><i class="fa fa-key icon"></i><input name='user_password' value={this.state.login_value.user_password} onChange={this.loginHandler.bind(this)} className="input-field my-3" type="password" placeholder="Password" /></div> */}
                                <div class="input-container my-4">
                                  <i class="fa fa-key icon"></i>
                                  <input class="input-field" type="password" placeholder="Password" name='user_password' value={this.state.login_value.user_password} onChange={this.loginHandler.bind(this)}  />
                                </div>
                                <p className="forget text-right" onClick={this.goForget.bind(this)}>Forget Password</p>
                                <div><button className="submit mt-5 mb-3" onClick={this.onLogin.bind(this)} >LogIn</button></div>
                                <p className="">Have not an account ? <a className="forget"  href="/sign-up" >Sign Up</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <NotificationContainer/>
            </div>


        );
    }
}

export default Login;
