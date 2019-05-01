import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
  }

  onToken = async (token, addresses) => {
    const res = await axios.post("http://localhost:5000/api/cart/charge/5cc7236dc711c3109c7283a5", { token });
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