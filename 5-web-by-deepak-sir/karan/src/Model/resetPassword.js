import React from 'react';



export default class ResetPasswordmODEL extends React.Component {
    constructor (props){
        super(props);
      this.resetPasswordValue({})
    }
    resetPasswordValue(object) {
        this.user_token = object.user_token ||''; 
        this.user_password = object.user_password ||'';     
        this.errormsg=object.errormsg ||'' 
       
        
   
    }
};