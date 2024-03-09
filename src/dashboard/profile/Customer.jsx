import React from "react";
import Table from "react-bootstrap/Table";

export const Customer = ({ customer }) => {
  return (
    <>
      <h4>My Profile</h4>
      <Table striped style={{ width: "50%" }}>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{customer.name}</td>
          </tr>
          <tr>
            <td>DOB</td>
            <td>{customer.dob}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{customer.email}</td>
          </tr>
          <tr>
            <td>Aadhar Number</td>
            <td>{customer.aadhar_number}</td>
          </tr>
          <tr>
            <td>Registered Date</td>
            <td>{customer.registration_date}</td>
          </tr>
          <tr>
            <td>Mobile</td>
            <td>{customer.mobile_no}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
