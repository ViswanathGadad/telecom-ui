import React from "react";
import useFetch from "../../hooks/useFetch";
import Spinner from "react-bootstrap/Spinner";
import { Customer } from "./Customer";
import { Plan } from "./Plan";

const requestOptions = {
  method: "GET",
};

export const Profile = ({ userId }) => {
  const { data, loading } = useFetch("/customer/" + userId, requestOptions);

  if (loading) return <Spinner animation="border" />;

  return (
    <>
      <Customer customer={data.customer} />
      <Plan enrollments={data.customer.enrollments} />
    </>
  );
};
