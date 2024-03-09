import React from "react";
import Alert from "react-bootstrap/Alert";

export const ErrorAlert = ({ error, show, setShow }) => {
  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>You got an error!</Alert.Heading>
        <p>{error}</p>
      </Alert>
    );
  }
};
