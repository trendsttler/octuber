import React, { Component } from 'react';
import './Signup.css';
import SignUpModel from '../../Model/SignUpModel'
import * as loginService from '../../services/loginService';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class SignUp extends Component {
    constructor(props) {
        super(props);                
        this.state = {
            signup_value: new SignUpModel()
        }
      
    }
    goForget() {
        this.props.history.push('/forget-password')
    }
    signUpHandler(event) {        
        let value = {};
        value[event.target.name] = event.target.value;
        this.setState({ signup_value: {...this.state.signup_value, ...value } });

    }
    onSignUp() {

        loginService.signup({ first_name: this.state.signup_value.first_name, last_name: this.state.signup_value.last_name,email:this.state.signup_value.email,password:this.state.signup_value.password,code:this.state.signup_value.code,city:this.state.signup_value.city,birthday:this.state.signup_value.birthday }).then(res=>{
            console.log('check user',res)
if(res.statusText==='Created')
this.props.history.push('/')
        }).catch((error) => {
            this.state.signup_value.errormsg = error.response.data.error;            
            this.setState({signup_value: this.state.signup_value});
             NotificationManager.error( this.state.signup_value.errormsg);
        })
    }

    render() {
        return (
            
            
            <div className="body ">
            
            <div className="container ">
             <div className="p-3 text-light">                 
                 <div className="form-group marg-top text-center mx-auto "> 
                 <div  className=" logo-login">hipster</div>  
                     <div class="input-container my-3">
                        <i class="fa fa-user icon"></i>
                         <input name="first_name"  value={this.state.signup_value.first_name} onChange={this.signUpHandler.bind(this)} class="input-field" type="text" placeholder="First Name"/>
                         </div>
                    <div class="input-container my-3">
                        <i class="fa fa-user icon"></i>
                        <input name="last_name" value={this.state.signup_value.last_name} onChange={this.signUpHandler.bind(this)} class="input-field" type="text" placeholder="Last Name"/>
                    </div>

                    <div class="input-container my-3">
                        <i class="fa fa-envelope icon"></i>
                        <input  name="email"value={this.state.signup_value.email} onChange={this.signUpHandler.bind(this)} class="input-field" type="text" placeholder="Email"/>
                    </div>

                    <div class="input-container my-3">
                        <i class="fa fa-key icon"></i>
                        <input name="password" value={this.state.signup_value.password} onChange={this.signUpHandler.bind(this)} class="input-field" type="password" placeholder="Password"/>
                    </div>

                    <div class="input-container my-3">
                        <i class="fa fa-hashtag icon"></i>
                        <input name="code" value={this.state.signup_value.code} onChange={this.signUpHandler.bind(this)} class="input-field" type="text" placeholder="Code"/>
                    </div>

                    <div class="input-container my-3">
                        <i class="fa fa-map-marker icon"></i>
                        <input name="city" value={this.state.signup_value.city} onChange={this.signUpHandler.bind(this)} class="input-field" type="text" placeholder="city" />
                    </div>   

                    <div class="input-container my-3">
                        <i class="fa fa-calendar icon"></i>
                        <input name="birthday" value={this.state.signup_value.birthday} onChange={this.signUpHandler.bind(this)} class="input-field date" type="date"/>
                    </div> 

                    <div><button className="submit my-3" onClick={this.onSignUp.bind(this)}>Sign up</button></div>
                    <p>Already Have an account ? <a className="forget"  href="/"> Login</a></p>
                 </div>
                </div>
             </div>
             <NotificationContainer/>
            </div>           
           
        );
    }
}

export default SignUp;
