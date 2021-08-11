import React, { useState, useEffect } from "react";
import { useMemo } from "react";
import { Form, Card, Row, Col, Button } from "react-bootstrap";
import "./EMIcalc.css";

const EMIcalc = () => {
  const [p, setP] = useState(0);
  const [n, setN] = useState(0);
  const [r, setR] = useState(0);
  const [si, setSi] = useState(0);
  const [ra, setRa] = useState(0);
  const [emi, setEmi] = useState(0);

  const handleEMI = () => {
    const simpleInt = (p * n * r) / 100;
    setSi(simpleInt);
    const repayAmnt = Number(p) + Number(simpleInt);
    setRa(repayAmnt);
    const emiLocal = repayAmnt / (n * 12);
    setEmi(emiLocal);
  };

  //componentDidMount / componentWillMount --class component
  // useEffect(() => {
  //   handleEMI();
  // }, [p, n, r]);

  //optimum way without using useEffect
  //useMemo
  const em = useMemo(() => handleEMI(), [p, n, r]);

  return (
    <div className="info">
      <Card className="calc">
        <Row>
          <Col md="5">
            <Form.Label>
              <b>Enter Loan Amount:</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Total Loan Amount "
              onChange={(e) => setP(e.target.value)}
            ></Form.Control>
          </Col>
        </Row>

        <br></br>
        <Col md="5">
          <Form.Label>
            <b>Number Of Years:</b>
          </Form.Label>
          <Form.Control
            type="Text"
            placeholder="Number Of Years"
            onChange={(e) => setN(e.target.value)}
          ></Form.Control>
        </Col>

        <br></br>
        <Col md="5">
          <Form.Label>
            <b>Rate Of Interest:</b>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Rate Of Interest"
            onChange={(e) => setR(e.target.value)}
          ></Form.Control>
        </Col>
        <Button className="login" variant="primary" onClick={handleEMI}>
          Calculate
        </Button>
        <Col>
          <h3>Simple Interest={si}</h3>
          <h3>Repay Amount={ra}</h3>
          <h3>EMI={emi}</h3>
        </Col>
      </Card>
    </div>
  );
};

export default EMIcalc;
