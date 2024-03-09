import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

export const Login = ({
  username,
  setUsername,
  password,
  setPassword,
  login,
  loading,
}) => {
  const onFormSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Form.Group as={Row} className="mb-3" controlId={"username"}>
        <Row className="justify-content-md-center">
          <Form.Label column sm={2}>
            Username
          </Form.Label>
          <Col sm={3}>
            <Form.Control
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId={"password"}>
        <Row className="justify-content-md-center">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={3}>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId={"login"}>
        <Row className="justify-content-md-center">
          <Col md={{ span: 4, offset: 3 }} className="justify-content">
            <Button type="submit">Login</Button>{" "}
            {loading && <Spinner animation="border" size="sm" />}
          </Col>
        </Row>
      </Form.Group>
    </Form>
  );
};
