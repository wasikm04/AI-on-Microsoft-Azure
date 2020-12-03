import React from "react";
import { Form, Container, Row, Col, Jumbotron } from 'react-bootstrap';
import Image from "react-bootstrap/Image";
import { sendRequest, sendOCRRequest } from "./api.js";

class UploadPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            fileContent: null,
            uploaded: false,
        };
        this.uploadSingleFile = this.uploadSingleFile.bind(this);
        this.handleNewText = this.handleNewText.bind(this);
    }


    uploadSingleFile(event) {
        this.props.onDelete();
        const file = event.target.files[0]
        this.setState({
            file: URL.createObjectURL(file),
            uploaded: true
        });
        this.handleNewText(file);
    }

    handleNewText(file) {
        sendOCRRequest(file).then((lines) => {
            let text = 'OCR: \n\n';
            lines.forEach((obj) => {
                obj.words.forEach((object) => {
                    text = text + ' ' +object.text;
                });
                text = text + ' \n ';
            })
            this.props.onChange(text);
        });

        sendRequest(file).then((lines) => {
            let text = 'Analyze&Read: \n';
            lines.forEach((object) =>  {
                text = text + '\n' + object.text;
            })
            this.props.onChange(text);
        }); 
    }

    render() {
        let imgPreview;
        if (this.state.file) {
            imgPreview = <Image
                rounded
                src={this.state.file} />;
        }
        return (
            <Container className="pt-2">
                <Jumbotron>
                    {this.state.uploaded === false ?
                        <h2 className="text-center">Wybierz obraz aby odczytać umieszczony na nim tekst</h2> : null}
                    <Row>
                    </Row>
                    <Row>
                        <Col ></Col>
                        <Col >
                            {imgPreview}
                        </Col>
                        <Col ></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col xs={6}>
                            <Form>
                                <Form.File
                                    id="custom-file"
                                    label="Wybierz plik"
                                    custom
                                    onChange={this.uploadSingleFile}
                                />
                            </Form>
                        </Col>
                        <Col></Col>
                    </Row>
                </Jumbotron>
            </Container>
        );
    }
}

export default UploadPanel;