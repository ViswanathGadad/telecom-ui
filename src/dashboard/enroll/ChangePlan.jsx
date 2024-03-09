import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { PlanCard } from "./PlanCard";

export const ChangePlan = ({ customer, plans }) => {
  const [selected, setSelected] = useState(plans[0].plan_id);

  const getEnrollment = () => {
    if (customer.enrollments.length === 0) return null;

    const activeEnrollment = customer.enrollments.find(
      (enrollment) => enrollment.status != "Inactive"
    );

    return activeEnrollment ? activeEnrollment : customer.enrollments[0];
  };

  const getButtonName = (enrollment) => {
    if (!enrollment) return "Enroll Plan";
    else if (enrollment.status === "Active") return "Modify Plan";
    else return "Renew Plan";
  };

  const enrollment = getEnrollment();
  const buttonName = getButtonName(enrollment);

  return (
    <>
      <h4>Change Plan</h4>
      <Table striped style={{ width: "50%" }}>
        <tbody>
          {enrollment && (
            <>
              <tr>
                <td>Enrolled Plan</td>
                <td>{enrollment.name}</td>
              </tr>
              <tr>
                <td>Enrolled date</td>
                <td>{enrollment.enroll_date}</td>
              </tr>
              <tr>
                <td>Expiry date</td>
                <td>{enrollment.expire_date}</td>
              </tr>
              <tr>
                <td>Status</td>
                <td>{enrollment.status}</td>
              </tr>
            </>
          )}
          <tr>
            <td>Select Plan</td>
            <td>
              <Form.Select
                onChange={(e) => {
                  setSelected(parseInt(e.target.value));
                }}
                value={selected}
              >
                {plans.map((plan) => {
                  return (
                    <option key={plan.plan_id} value={plan.plan_id}>
                      {plan.name}
                    </option>
                  );
                })}
              </Form.Select>
            </td>
          </tr>
          <tr>
            <td>Plan Details</td>
            <td>
              <PlanCard
                plan={plans.find((plan) => plan.plan_id === selected)}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2} style={{ textAlign: "center" }}>
              <Button variant="primary" size="lg" active>
                {buttonName}
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>

      <></>
    </>
  );
};
