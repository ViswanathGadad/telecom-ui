import React from "react";
import useFetch from "../../hooks/useFetch";
import Spinner from "react-bootstrap/Spinner";
import { ChangePlan } from "./ChangePlan";

const requestOptions = {
  method: "GET",
};

export const Enroll = ({ userId }) => {
  const { data: custData, loading: custLoading } = useFetch(
    "/customer/" + userId,
    requestOptions
  );

  const { data: plansData, loading: plansLoading } = useFetch(
    "/plans",
    requestOptions
  );

  if (custLoading || plansLoading) return <Spinner animation="border" />;

  return (
    <ChangePlan
      customerId={userId}
      customer={custData.customer}
      plans={plansData.plans}
    />
  );
};
