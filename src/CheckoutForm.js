import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";

class CheckoutForm extends Component {

  onToken = async (token, addresses) => {
    const userId = "5cce25a3ba4b5404509b464d";
    const res = await axios.post(`http://localhost:5000/api/cart/charge/${userId}`, { token });
    if(res) alert(res.data.message)
    else alert("missing credentials")

  };
  
  render() {
    return (
      <StripeCheckout
        stripeKey="pk_test_waUzNCqXf3UdHEixK8nwy8u600AnlZIHuP"
        billingAddress
        image="https://static01.nyt.com/images/2017/05/11/t-magazine/bookstore-slide-2MCD/bookstore-slide-2MCD-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
        locale="auto"
        name="BookStore.com"
        token={this.onToken}
        zipCode
      />
    );
  }
  
}
export default CheckoutForm;