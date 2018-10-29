import React from 'react';



export default class ForgetModel extends React.Component {
    constructor (props){
        super(props);
      this.forgetValue({})
    }
    forgetValue(object) {
        this.user_email = object.user_email ||'';      
        this.errormsg=object.errormsg ||''          
   
    }
};