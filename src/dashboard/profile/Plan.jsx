import React from "react";
import Table from "react-bootstrap/Table";

export const Plan = ({ enrollments }) => {
  return (
    <>
      <h4>My Plan</h4>
      {enrollments.length > 0 ? (
        enrollments.map((enrollment) => {
          return (
            <Table
              bordered
              striped
              key={enrollment.enrollment_id}
              style={{ width: "50%" }}
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Enrolled date</th>
                  <th>Expiry date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{enrollment.name}</td>
                  <td>{enrollment.enroll_date}</td>
                  <td>{enrollment.expire_date}</td>
                  <td>{enrollment.status}</td>
                </tr>
              </tbody>
            </Table>
          );
        })
      ) : (
        <p>Not Enrolled</p>
      )}
    </>
  );
};
