import React from 'react';
import { Container, Col, Row, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
      <div>
      <Row>
        <Col className='login'></Col>
        <Col className='login2'>
          <div>Col2</div>
          <Form>
    <FormGroup floating>
      <Input
        id="exampleEmail"
        name="email"
        placeholder="Email"
        type="email"
      />
      <Label for="exampleEmail">
        Email
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
        id="examplePassword"
        name="password"
        placeholder="Password"
        type="password"
      />
      <Label for="examplePassword">
        Password
      </Label>
    </FormGroup>
    {' '}
    <Button>
      Submit
    </Button>
  </Form>
        </Col>
      </Row>
      </div>
  );
}

export default App;
