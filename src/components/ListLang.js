import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

export default class ListLang extends Component {
  render() {
    return(
      <ListGroup>
        <ListGroupItem>
          <b>Python</b>
        </ListGroupItem>
        <ListGroupItem>
          <b>React.js</b>
        </ListGroupItem>
        <ListGroupItem>
          <b>Meteor.js</b>
        </ListGroupItem>
        <ListGroupItem>
          <b>Javascript / HTML / CSS</b>
        </ListGroupItem>
        <ListGroupItem>
          <b>C</b>
        </ListGroupItem>
        <ListGroupItem>
          <b>/[^A-Z\s\b]+ REGEX [^A-Z\s\b]+/</b>
        </ListGroupItem>
      </ListGroup>
    );
  }
}
