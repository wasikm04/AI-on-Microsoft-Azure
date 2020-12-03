import React from "react";
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

class TextPanel extends React.Component {
    constructor(props) {
        super(props);
        this.newlineText = this.newlineText.bind(this);
        this.download = this.download.bind(this);
    }

    newlineText(text) {
        const newText = text.split('\n').map(str => <h5 key={str}>{str}</h5>);
        return newText;
    }

    download(id) {
        console.log(id);
        this.props.onDownload(id);
    }

    render() {
        return (
            <Container className="pt-2">
                <Row>
                    {this.props.text.length ?
                        this.props.text.map((textObj, index) => {
                            let text = this.newlineText(textObj);
                            return <Col key={index} xs={6}>
                                <Jumbotron className="text-center">
                                    {text}
                                    <button onClick={() => {this.download(index)}}>
                                        Pobierz
                                    </button>
                                </Jumbotron></Col>;
                        }) : null}
                </Row>
            </Container>
        );
    }
}

export default TextPanel;