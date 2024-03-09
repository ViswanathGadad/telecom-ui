import React from "react";
import { Profile } from "./profile/Profile";
import { Enroll } from "./enroll/Enroll";

export const Dashboard = ({ userId, showEnroll }) => {
  return showEnroll ? <Enroll userId={userId} /> : <Profile userId={userId} />;
};
