import { Button, Col, Container, Row } from 'react-bootstrap';
import './Introduction.css';

export default function Introduction() {
  return (
    <div className='introduction p-3 p-lg-5 mt-5'>
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col xs={12} md={8} >
                    <h1 className='pl-2 text-center'>
                        Welcome to Dynamic form{" "}
                        <span className='pt-2 pb-4'>
                            That will do everithing that you want
                        </span>
                    </h1>
                    <h4 className='text-center pt-3'>
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                    </h4>
                    <div className='d-flex container-actions mt-5'>
                        <div className='container-buttons'>
                            <Button className='p-3' onClick={()=> console.log("Click Button")}>Get in touch </Button>
                            <Button className='p-3'>Get in  touch</Button>
                        </div>
                        <div className='btn-start-create'>
                            <a href='#dynamic-form'>Start to create ➡️ </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        
    </div>
  )
}
