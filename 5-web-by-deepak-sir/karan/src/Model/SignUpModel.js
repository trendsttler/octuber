import React from 'react';



export default class SignUpModel extends React.Component {
    constructor (props){
        super(props);
      this.signUpValue({})
    }
    signUpValue(object) {
        this.email = object.email ||'';
        this.first_name=object.first_name ||''       
        this.last_name=object.last_name ||''
        this.city=object.city ||''
        this.birthday=object.birthday ||''
        this.code=object.code ||''
        this.password=object.password ||''
        this.errormsg=object.errormsg ||'' 
        
   
    }
};