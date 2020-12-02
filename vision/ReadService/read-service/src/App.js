import './App.css';
import React from "react";
import UploadPanel from "./components/UploadPanel.js";
import TextPanel from "./components/TextPanel.js";
import { Container, Col, Row, Navbar } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(text) {
    let temp = this.state.text + ' \n ' + text
    this.setState({text: temp});
  }


  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#">ReadService</Navbar.Brand>
        </Navbar>
        <Container fluid>
          <Row>
            <Col xl={6}><UploadPanel onChange={this.handleChange} /></Col>
            <Col xl={6}><TextPanel text={this.state.text} /></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
