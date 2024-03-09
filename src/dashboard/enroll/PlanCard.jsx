import React from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

export const PlanCard = ({ plan }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{plan.name}</Card.Title>
        <Card.Text>
          <Table>
            <tbody>
              <tr>
                <td>Cost</td>
                <td>{plan.cost}</td>
              </tr>
              <tr>
                <td>Validity</td>
                <td>{plan.validity}</td>
              </tr>
            </tbody>
          </Table>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
