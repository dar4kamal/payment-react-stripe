import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    // User clicked submit
    let {token} = await this.props.stripe.createToken({name: "Name"});
    console.log(token);
    let response = await fetch("http://localhost:5000/charge", {
        method: "POST",
        headers: {"Content-Type": "text/plain"},
        body: token.id
    });

    if (response.ok) this.setState({complete: true});
  }

  render() {
    if (this.state.complete) return <h1> "Purchase Complete!" </h1>
    return (
        <div className="checkout">
            <div className="ma3">
                <CardElement />
            </div>
            <button onClick={this.submit}>Send</button>
        </div>
    );
  }
}

export default injectStripe(CheckoutForm);