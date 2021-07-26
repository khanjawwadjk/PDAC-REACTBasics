import React from "react";
import { Row, Col, Button, Card, Form } from "react-bootstrap";

export const TableFormat = () => {
return(
    <div>
        <Row>
        <Col xm="2">JK</Col>
        
        <Col xm="4">
            <Row><label>First Name:</label>
            <input type="text"></input></Row>

            <Row><label>Last Name:</label>
            <input type="text"></input></Row>
        
        
            <Row><label>Address:</label></Row>
            <Col>
                <Row> <h6>House No.</h6> <input type="text"></input></Row>
                <Row><h6>Street</h6> <input type="text"></input></Row>
                <Row><h6>City</h6></Row>
                <Row><h6>Country</h6></Row>    
            </Col>   
        </Col>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
        <Col xm="4">
            <Row>
                <Button>Submit</Button>
            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
                <textarea>

                </textarea>
            </Row>
        </Col>
        <Col xm="2"></Col>
        </Row>

    {/* // Using Form method............ */}
    <h1>This Is Using Form Method</h1>

    <Row>
        <Col md="2"></Col>
        <Col md="4">
            <Card>
                <Row>
                    <Col>
                    <Form>
                        <Form.Group>
                            <Row>
                                <Col>
                                <Form.Control type="text" placeholder="First Name"></Form.Control>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <Form.Control type="text" placeholder="Last Name"></Form.Control>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <Form.Label>Address</Form.Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <Form.Control type="text" placeholder="Line 1"></Form.Control>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <Form.Control type="text" placeholder="Line 2"></Form.Control>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <Form.Control type="text" placeholder="City"></Form.Control>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                    </Col>
                </Row>
            </Card>
        </Col>
        <Col md="4">
            <Row>
                <Col>
                <Button>Submit</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                <Card>
                    <Row>
                    <Col>Jawwad Khan</Col>
                    </Row>
                    <Row>
                    
                    <Col>Degloor Naka</Col>
                    </Row>
                    <Row>
                    <Col>Nanded</Col>
                    </Row>
                    
                    
                </Card>
                </Col>
            </Row>


        </Col>
        <Col md="2"></Col>

    </Row>

    </div>
);
}