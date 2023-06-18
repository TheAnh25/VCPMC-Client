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
import Playlist from "../pages/play-list";
import DetailPlaylist from "../pages/play-list/detailPlaylist";
import UpdatePlaylist from "../pages/play-list/updatePlaylist";
import AddPlaylist from "../pages/play-list/addPlaylist";
import AddRecordPlaylist from "../pages/play-list/addRecordPlaylist";
import AddRecordNewPlaylist from "../pages/play-list/addRecordNewPlaylist";
import Schedule from "../pages/schedule";
import DetailSchedule from "../pages/schedule/detailSchedule";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/linkresetpassword" element={<LinkResetPassword />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/update" element={<UpdateUser />} />
      <Route path="/users/changepassword" element={<ChangePassword />} />
      {/* record  */}
      <Route path="/records" element={<Record />} />
      <Route path="/records/approverecord" element={<ApproveRecord />} />
      <Route path="/records/updaterecords/:id" element={<UpdateRecord />} />
      {/* playlist  */}
      <Route path="/playlist" element={<Playlist />} />
      <Route path="/playlist/addPlaylist" element={<AddPlaylist />} />
      <Route
        path="/playlist/addPlaylist/addrecordplaylist"
        element={<AddRecordNewPlaylist />}
      />
      <Route path="/playlist/detail/:id" element={<DetailPlaylist />} />
      <Route path="/playlist/detail/:id/update" element={<UpdatePlaylist />} />
      <Route
        path="/playlist/detail/:id/update/addrecord"
        element={<AddRecordPlaylist />}
      />
      {/* schedule  */}
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/schedule/detail/:id" element={<DetailSchedule />} />
    </Routes>
  );
};

export default Routers;
