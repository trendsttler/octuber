import React, { Component } from 'react';
import './ResetPassword.css';
import ResetPasswordmODEL from '../../Model/resetPassword'
import * as loginService from '../../services/loginService';
import {NotificationContainer, NotificationManager} from 'react-notifications';




class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reset_value: new ResetPasswordmODEL()
        }

    }
    goLogin() {
        this.props.history.push('/')
    }
    resetHandler(fieldName, value) {
        console.log('check handler', fieldName, value)
        this.state.reset_value[fieldName] = value;
        this.setState({ reset_value: this.state.reset_value });
    }
    setNewpASSWORD() {

        loginService.setPassword({ resettoken: this.state.reset_value.user_token, password: this.state.reset_value.user_password }).then(() => {
            this.props.history.push('/')
        }).catch((error) => {
            this.state.reset_value.errormsg = error.response.data.error;
            this.setState({ reset_value: this.state.reset_value });
            NotificationManager.error( this.state.reset_value.errormsg );
        })
    }
    render() {
        return (
            <div className="body ">
                <div className="container ">
                    <div className="p-3 text-light">                  
                        <div className="form-group text-center mx-auto ">
                        <div className="mb-4 mt-3"><strong >Reset Your Password</strong></div>
                            <div class="input-container my-3">
                                <i class="fa fa-hashtag icon"></i>
                                <input name='user_token' value={this.state.reset_value.user_token} onChange={e => this.resetHandler('user_token', e.target.value)} className="input-field " type="text" placeholder="Token" />
                            </div>
                            <div class="input-container my-3">
                                <i class="fa fa-key icon"></i>
                                <input name='user_password' value={this.state.reset_value.user_password} onChange={e => this.resetHandler('user_password', e.target.value)} className="input-field " type="text" placeholder="Password" />
                            </div>
                            <div><button className="submit mt-5 mb-3" onClick={this.setNewpASSWORD.bind(this)}>Submit</button></div>

                        </div>
                    </div>
                </div>
                <NotificationContainer/>
            </div>
        )
    }

}

export default ResetPassword;