import './ThirdStep.css';

import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";

export default function ThirdStep() {
  return (
    <div>
      <h2>Third Step</h2>
      <h4>Do you  want to build a sonow-man? or leave a comment?</h4>
      <Container className="p-5 text-center">
        <Row className="justify-content-md-center">
          <Col lg='10'>
            <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
              <Form.Control 
                as='textarea' 
                placeholder="Leave a comment" 
                onChange={(e) => console.log(e.target.value)} />
            </FloatingLabel>
          </Col>
        </Row>
        <div className="send-form">
          <p className="result p-3" onClick={() => console.log("View result")}>
            View result 🤙
          </p>

        </div>
      </Container>
    </div>
  )
}
