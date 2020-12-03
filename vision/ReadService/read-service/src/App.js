import './App.css';
import React from "react";
import UploadPanel from "./components/UploadPanel.js";
import TextPanel from "./components/TextPanel.js";
import { Container, Col, Row, Navbar } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeDelete = this.handleChangeDelete.bind(this);
  }

  handleChange(text) {
    this.setState({ text: this.state.text.concat(text) });
  }

  handleChangeDelete() {
    this.setState({ text: [] });
  }


  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#">ReadService</Navbar.Brand>
        </Navbar>
        <Container fluid>
          <Row>
            <Col xl={6}><UploadPanel onChange={this.handleChange} onDelete={this.handleChangeDelete} /></Col>
            <Col xl={6}><TextPanel text={this.state.text} /></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
