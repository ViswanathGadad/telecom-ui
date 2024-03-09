import React from "react";
import useFetch from "../../hooks/useFetch";
import Spinner from "react-bootstrap/Spinner";

const requestOptions = {
  method: "GET",
};

export const Enroll = ({ userId }) => {
  const { data: custData, loading: custLoading } = useFetch(
    "/customer/" + userId,
    requestOptions
  );

  const { loading: plansLoading } = useFetch("/plans", requestOptions);

  if (custLoading || plansLoading) return <Spinner animation="border" />;

  if (custData.customer.enrollments.length === 0) return "New Plan";

  const activePlans = custData.customer.enrollments.filter(
    (enrollment) => enrollment.status != "Inactive"
  );

  if (activePlans.length === 0) return "Renew plan";

  return "Modify Plan";
};
