import React, { Component } from 'react';
import './forgetpassword.css';
import ForgetModel from '../../Model/forgetPasswordModel'
import * as loginService from '../../services/loginService';
import {NotificationContainer, NotificationManager} from 'react-notifications';




class Forgetpassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forget_value: new ForgetModel()
        }

    }
    goLogin() {
        this.props.history.push('/')
    }
    forgetHandler(fieldName, value) {
        this.state.forget_value[fieldName] = value;
        this.setState({ forget_value: this.state.forget_value });
    }
    onForget() {

        loginService.forget({ email: this.state.forget_value.user_email }).then(() => {
            this.props.history.push('/reset-password')
        }).catch((error) => {
            this.state.forget_value.errormsg = error.response.data.error;
            this.setState({ forget_value: this.state.forget_value });
            NotificationManager.error( this.state.forget_value.errormsg);
        })
    }
    render() {
        return (
            <div>
                <div className="container ">
                    <div className="p-3 text-light">                      
                        <div className="form-group text-center mx-auto ">
                            <div className="mb-5 mt-3"><strong >Enter Token Number</strong></div>
                            <div class="input-container my-3">
                               <i class="fa fa-envelope icon"></i>
                               <input  name='user_email' value={this.state.forget_value.user_email} onChange={e => this.forgetHandler('user_email', e.target.value)} class="input-field" type="text" placeholder="Email"/>
                            </div>
                            <div><button className="submit mt-5 mb-3" onClick={this.onForget.bind(this)}>Submit</button></div>
                            <p href="login.html" onClick={this.goLogin.bind(this)} className="forget">Back to LogIn ?</p>
                        </div>
                    </div>
                </div>
                <NotificationContainer/>
            </div>
        )
    }

}

export default Forgetpassword;