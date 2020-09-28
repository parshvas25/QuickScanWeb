import React from 'react';
import '../App.css';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tax: 13,
      total: 0.0,
    };
  }
  render() {
    return <h1 className='box-field'>Cart</h1>;
  }
}
export default Cart;
