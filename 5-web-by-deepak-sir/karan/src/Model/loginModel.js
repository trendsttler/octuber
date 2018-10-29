import React from 'react';



export default class LoginModel extends React.Component {
    constructor (props){
        super(props);
      this.modelValue({})
    }
    modelValue(object) {
        this.user_email = object.user_email ||'';
        this.user_password=object.user_password ||''       
        this.logedIn=object.logedIn ||false  
        this.errormsg=object.errormsg ||''       
        this.err=object.err ||false  
   
    }
};