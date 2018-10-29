import React from 'react';



export default class PremiumModel extends React.Component {
    constructor (props){
        super(props);
      this.premiumValue({})
    }
    premiumValue(object) {
    
        this.errormsg=object.errormsg ||''       
         
   
    }
};