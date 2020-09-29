import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';

class CardItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      index: props.index,
      cost: props.cost,
    };
  }
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src='holder.js/100px180' />
        <Card.Body>
          <Card.Title>{this.state.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button
            onClick={() => {
              console.log(this.state.index);
            }}
          >
            +
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
export default CardItem;
