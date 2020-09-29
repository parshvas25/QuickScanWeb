import React from 'react';
import '../App.css';
import CardItem from './Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
const api_url = 'http://localhost:4000/';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tax: 13,
      total: 0.0,
      cart: [],
    };
  }
  render() {
    return (
      <div>
        <h1 className='cart-heading'>Cart</h1>
        <ListGroup>
          <ListGroup.Item>No style</ListGroup.Item>
          <ListGroup.Item variant='primary'>Primary</ListGroup.Item>
          <ListGroup.Item variant='secondary'>Secondary</ListGroup.Item>
          <ListGroup.Item variant='success'>Success</ListGroup.Item>
          <ListGroup.Item variant='danger'>Danger</ListGroup.Item>
          <ListGroup.Item variant='warning'>Warning</ListGroup.Item>
          <ListGroup.Item variant='info'>Info</ListGroup.Item>
          <ListGroup.Item variant='light'>Light</ListGroup.Item>
          <ListGroup.Item variant='dark'>Dark</ListGroup.Item>
        </ListGroup>
      </div>
    );
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
    var elements = [];
    if (this.state.response != null) {
      for (var i = 0; i < this.state.response.length; i++) {
        elements.push(
          <CardItem
            name={this.state.response[i][' Name']}
            index={i}
            cost={0}
          ></CardItem>
        );
      }
    }
    return (
      <Container fluid>
        <Row>
          <Col xs={9}>
            <Container fluid>
              <Row>{elements} </Row>
            </Container>
          </Col>

          <Col>
            <Cart />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Items;
