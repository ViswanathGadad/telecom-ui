import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { ErrorAlert } from "../common/ErrorAlert";
import { Login } from "./Login";

export const Home = ({ setUserId }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [requestOptions, setRequestOptions] = useState(null);
  const { data, loading, error } = useFetch("/login", requestOptions);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      setShowError(true);
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      setUserId(data.customer_id);
      navigate("/dashboard");
    }
  }, [data]);

  const login = () => {
    const myHeaders = new Headers();
    myHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
    const options = {
      method: "POST",
      headers: myHeaders,
    };
    setRequestOptions(options);
  };

  if (showError)
    return <ErrorAlert error={error} show={showError} setShow={setShowError} />;

  return (
    <Login
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      login={login}
      loading={loading}
    ></Login>
  );
};
