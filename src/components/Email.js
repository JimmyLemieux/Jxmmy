import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl,Button} from 'react-bootstrap';
import './Email.css';

export default class Email extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: '',
      flag: undefined
    };
    var flag = false;
  }

  getValidationContext() {
    const length = this.state.value.length;
    if(length > 10){
      this.flag = true;
      return 'success';
    }
    else if (length > 5){
      this.flag = false;
      return 'warning';
    }
    else if (length > 0){
      this.flag = false;
      return 'error';
    }
    return null;
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }
  render() {
    return(
      <form>
        <FormGroup controlId="email-form" validationState={this.getValidationContext()}>
          <ControlLabel className='cntrl'> Enter a valid email address to contact me </ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Email at jimmylemieux9@gmail.com"
            onChange={this.handleChange}
          />
          <FormControl.Feedback/>
          {this.flag && <Button bsStyle='success'>Send</Button>}
        </FormGroup>


      </form>
    );
  }
}
