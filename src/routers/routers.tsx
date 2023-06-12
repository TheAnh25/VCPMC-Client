import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import ResetPassword from "../pages/resetPassword";
import LinkResetPassword from "../pages/resetPassword/linkResetPassword";
import Record from "../pages/records";
import Users from "../pages/users";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/linkresetpassword" element={<LinkResetPassword />} />
      <Route path="/records" element={<Record />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
};

export default Routers;
