import React from 'react';



export default class ProfileModel extends React.Component {
    constructor (props){
        super(props);
      this.profileValue({})
    }
    profileValue(object) {
        this.email = object.email ||'';
        this.first_name=object.first_name ||''       
        this.last_name=object.last_name ||''
        this.city=object.city ||''
        this.birthday=object.birthday ||''
        this.shouldShow=object.shouldShow ||false
        this.errormsg=object.errormsg ||''
   
    }
};