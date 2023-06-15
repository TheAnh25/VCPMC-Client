import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import ResetPassword from "../pages/resetPassword";
import LinkResetPassword from "../pages/resetPassword/linkResetPassword";
import Record from "../pages/records";
import Users from "../pages/users";
import UpdateUser from "../pages/users/updateUser";
import ChangePassword from "../pages/users/changePassword";
import UpdateRecord from "../pages/records/updateRecord";
import ApproveRecord from "../pages/records/approveRecord";
// import { useAppSelector } from "../store/hooks";

const Routers = () => {
  // const { user } = useAppSelector((state) => state.user);

  // const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      {/* <Route path="/" element={<Users />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/linkresetpassword" element={<LinkResetPassword />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/update" element={<UpdateUser />} />
      <Route path="/users/changepassword" element={<ChangePassword />} />
      <Route path="/records" element={<Record />} />
      <Route path="/records/approverecord" element={<ApproveRecord />} />

      <Route path="/records/updaterecords/:id" element={<UpdateRecord />} />
    </Routes>
  );
};

export default Routers;
