import React, { Component } from 'react';
import './Profilestle.css';
import * as loginService from '../../services/loginService';
import ProfileModel from '../../Model/profileModel';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profile_value: new ProfileModel()
        }

        console.log('check model', this.state)
    }
    goPremium() {
        this.props.history.push('/get-premium')
    }

    componentDidMount() {
        var get_token = localStorage.getItem('token')
        loginService.getSubDetail({ token: get_token }).then(res => {
            this.setState({ profile_value: { ...this.state.profile_value, ...res.data } });
        })

    }

    profileHandler(event) {
        let value = {};
        value[event.target.name] = event.target.value;
        this.setState({ profile_value: { ...this.state.profile_value, ...value } });
        console.log('')

    }
    goUpdate() {
        var get_token = localStorage.getItem('token')
     
        loginService.userUpdate({ token: get_token, email: this.state.profile_value.email, first_name: this.state.profile_value.first_name, last_name: this.state.profile_value.last_name,city:this.state.profile_value.city,birthday:this.state.profile_value.birthday }).then(res => {
            if (res.status === 200) {
                this.state.profile_value.shouldShow = true
                this.setState({profile_value: this.state.profile_value});
                console.log('check tru or false', this.state.profile_value.shouldShow)
                
            }          

        }).catch((error) => {
            this.state.profile_value.errormsg = error.response.data.error;            
            this.setState({profile_value: this.state.profile_value});
            NotificationManager.error( this.state.profile_value.errormsg );
            
        })
    }
    render() {

        return (

            <div>
                <body className="profile-body container">
                <div className="form-group  mx-auto" style={{marginTop: "10%", maxWidth: "100%",}}>
                        <h1 className={this.state.profile_value.shouldShow ? 'header' : 'hidden'} >Profile updated successfuly</h1>
                        <h2 className="header mt-2 mb-5">Profile</h2>

                        <hr className="mt-5 devider" style={{height: "2px", marginBottom: "80px",}} />

                        <div class="input-container my-4">
                        <i class="fa fa-user icon"></i>
                        <input type="text" name="first_name" value={this.state.profile_value.first_name} onChange={this.profileHandler.bind(this)} class="input-field" placeholder="First Name" />
                        </div>

                        <div class="input-container my-4">
                        <i class="fa fa-user icon"></i>
                        <input type="text" name="last_name" value={this.state.profile_value.last_name} onChange={this.profileHandler.bind(this)} class="input-field" placeholder="Last Name" />
                        </div>

                        <div class="input-container my-4">
                        <i class="fa fa-envelope icon"></i>
                        <input type="text" name="email" value={this.state.profile_value.email} onChange={this.profileHandler.bind(this)} class="input-field" placeholder="Email" />
                        </div>
                        
                        
                    
                        <div class="input-container my-4">
                        <i class="fa fa-map-marker icon"></i>
                        <input type="text" name="city" value={this.state.profile_value.city} onChange={this.profileHandler.bind(this)} class="input-field" placeholder="City" />
                        </div>
                        
                        <div class="input-container my-4">
                        <i class="fa fa-calendar icon"></i><input type="date" name="birthday" class="input-field" value={this.state.profile_value.birthday} onChange={this.profileHandler.bind(this)}  placeholder="Date" /></div>                       
                                <div className="text-center mt-5 mb-3">
                                    <span>
                                        <button className="btn btn-premium submit" style={{marginLeft: "10px",}} onClick={this.goUpdate.bind(this)} >Submit</button>
                                        <button className="btn btn-cancel-outline btn-premium submit " onClick={this.goPremium.bind(this)}>Cancel</button>
                                    </span>

                                </div>
                 </div>
                   
                </body>
                <NotificationContainer/>
            </div>

        )
    }

}

export default Profile;