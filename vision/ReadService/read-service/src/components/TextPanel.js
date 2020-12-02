import React from "react";
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

class TextPanel extends React.Component {
    constructor(props) {
        super(props);
        this.newlineText = this.newlineText.bind(this);
    }

    newlineText(props) {
        const text = props.text;
        const newText = text.split('\n').map(str => <p>{str}</p>);
        return newText;
      }

    render() {
        return (
            <Container className="pt-2">
                <Row>
                    <Col></Col>
                    <Col xs={10}>
                        {this.props.text !== null ?
                            <Jumbotron>
                                {this.newlineText(this.props)}
                            </Jumbotron>
                            : null}
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        );
    }
}

export default TextPanel;