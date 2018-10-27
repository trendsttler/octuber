import React from 'react';



export default class PaymentModel extends React.Component {
    constructor (props){
        super(props);
      this.paymentValue({})
    }
    paymentValue(object) {
        // this.card_number = object.card_number ||'';
        // this.month=object.month ||'' ;
        // this.year=object.year ||'' ;
        // this.security_code=object.security_code ||'' ;
        // this.card_type=object.card_type ||'' ;
        this.loader=object.loader || false
        this.errormsg=object.errormsg || ''
    }
};