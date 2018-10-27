import React from "react";
import {Router, Route, Redirect } from "react-router-dom";
import Login from "../components/Login/Loginpage";
import Forgetpassword from "../components/ForgetPassword/ForgetPassword";
import GetPremium from "../components/Premium/GetPremum";
import Profile from "../components/Profile/Profile";
import AlreadySubscribe from "../components/Subscribe/AlredySubscribe";
import PaymentSuccess from "../components/PaymentSuccess/payment";
import ProfileUpdate from "../components/ProfileUpdate/profileUpdate";
import ResetPassword from "../components/ResetPassword/ResetPassword";
import SignUp from "../components/Signup/Signup";
import App from "../App";

import createBrowserHistory from "history/createBrowserHistory"
 const customHistory = createBrowserHistory();

 const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
  localStorage.getItem('token')
        
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
)

 const CustomRoutes =() => (
    
     <Router history={customHistory}>
         <div>        
           
             <Route exact path='/' component={Login} />
             <Route path='/forget-password' component={Forgetpassword} />
             <Route path='/get-premium' component={GetPremium} />
             <Route path='/payment' component={App} />
             <Route path='/profile' component={Profile} />
             <Route path='/subscribe' component={AlreadySubscribe} />
             <Route path='/success' component={PaymentSuccess} />
             <Route path='/profile-update' component={ProfileUpdate} />
             <Route path='/reset-password' component={ResetPassword} />
             <Route path='/sign-up' component={SignUp} />
         </div>
     </Router>
 )
 export default CustomRoutes;