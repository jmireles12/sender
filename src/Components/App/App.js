import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap'
import { Component } from 'react';

class App extends Component {
  state = {
    receiver: '',
    message: '',
    valid: false,
    validationMessage: '',
    validationEmail: ''
  }

  isEmailValid = e => {
    if (!this.state.receiver) {
      this.setState({
        validationEmail: 'Email can not be blank',
        valid: false
      })
    }
  }

  isTextValid = e => {
    if(!this.state.message) {
      this.setState({
        validationMessage: 'Text can not be blank',
        valid: false
      })
    }
  }

  handleEmail = email => {
    this.setState({
      receiver: email
    })
  }

  handleText = text => {
    this.setState({
      message: text
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.isEmailValid()
    this.isTextValid()
  }

  render() {
    return (
      <div className="App">
        <Form onSubmit={ e => {this.handleSubmit(e) }}>
          <Form.Group controlId="exampleForm.ControlInput1">
            {!this.state.valid && (
              <section>
                <p>{this.state.validationEmail}</p>
              </section>
            )}
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" onChange={e => this.handleEmail(e.target.value)}/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            {!this.state.valid && (
              <section>
                <p>{this.state.validationMessage}</p>
              </section>
            )}
            <Form.Label>Textarea</Form.Label>
            <Form.Control as="textarea" rows={5} onChange={e => this.handleText(e.target.value)}/>
          </Form.Group>
          <Button type='submit' variant='secondary' size='lg'>
            Submit
          </Button>
        </Form>
        
      </div>
    );
  }
}

export default App;
