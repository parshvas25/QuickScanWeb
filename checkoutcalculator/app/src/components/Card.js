import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class CardItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      index: props.index,
      cost: props.cost,
      many: 0,
      total_cost: 0,
    };
  }
  addItem() {
    this.setState({ many: this.state.many + 1 });
    this.setState({ total_cost: this.state.many * this.state.cost });
  }
  deleteItem() {}
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
          <Button onClick={() => this.addItem()}>+</Button>
        </Card.Body>
      </Card>
    );
  }
}
export default CardItem;
