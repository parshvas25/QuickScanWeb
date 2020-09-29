import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const api_url = 'http://localhost:4000/';

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

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      response: null,
    };
  }
  componentDidMount() {
    fetch(api_url)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          response: result,
        });
      });
  }

  render() {
    console.log(this.state.response);
    var elements = [];
    if (this.state.response != null) {
      for (var i = 0; i < this.state.response.length; i++) {
        elements.push(
          <div className='box-field'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant='top' src='holder.js/100px180' />
              <Card.Body>
                <Card.Title>{this.state.response[i][' Name']}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant='primary'>+</Button>
              </Card.Body>
            </Card>
          </div>
        );
      }
    }
    return (
      <div>
        {elements}
        <Cart />
      </div>
    );
  }
}
export default Items;
