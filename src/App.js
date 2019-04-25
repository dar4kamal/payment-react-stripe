import React from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import './App.css';

function App() {
  return (
    <div>
      <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
          <div className="example">
            <h1>React Stripe Elements Example</h1>
            {/* <div>
              <article class="br2 ba dark-gray b--black-10 mv4 w-400 w-50-m w-50-l mw5 center"> */}
                <Elements>
                  <div className="pa2 ph3-ns pb3-ns">
                    <p>Would you like to complete the purchase?</p>
                    <form className="ma3">
                      <input type="text" name="name" /> 
                    </form>                    
                    <CheckoutForm />                    
                  </div>
                </Elements>
              {/* </article>            
            </div> */}
          </div>
      </StripeProvider>
    </div>
  );
}

export default App;