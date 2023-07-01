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
import AddSchedule from "../pages/schedule/addSchedule";
import UpdateSchedule from "../pages/schedule/updateSchedule";
import AddDevices from "../pages/schedule/addDevices";
import Contract from "../pages/contracts";
import DetailContract from "../pages/contracts/detailContract";
import DetailAuthorizationContract from "../pages/contracts/detailAuthorizationContract";
import AddContract from "../pages/contracts/addContract";
import UpdateAuthorizationContract from "../pages/contracts/updateAuthorizationContract";
import UpdateAuthorizationRecord from "../pages/contracts/updateAuthorizationRecord";
import AddNewRecord from "../pages/contracts/addNewRecord";
import AddExploitationContract from "../pages/contracts/addExploitationContract";
import UpdateExploitationContract from "../pages/contracts/updateExploitationContract";
import SaveContract from "../pages/contracts/saveContract";
import Devices from "../pages/devices";
import AddNewDevices from "../pages/devices/addNewDevices";
import DetailDevices from "../pages/devices/detailDevices";
import Operators from "../pages/Operators";
import DetailOperator from "../pages/Operators/detailOperator";
import DetailCustomer from "../pages/Operators/detailCustomer";
import UpdateCustomer from "../pages/Operators/updateCustomer";
import AddCustomer from "../pages/Operators/addCustomer";
import Authorized from "../pages/Authorized";
import UpdateAuthorized from "../pages/Authorized/updateAuthorized";
import Report from "../pages/Revenue/reportsRevenue";
import History from "../pages/Revenue/History/history";
import Distributor from "../pages/Revenue/Distributor/distributor";
import DetailReport from "../pages/Revenue/reportsRevenue/detailReport";
import DetailRevenue from "../pages/Revenue/reportsRevenue/detailRevenue";
import SynchDevice from "../pages/Revenue/reportsRevenue/synchDevice";
import DetailDistributor from "../pages/Revenue/Distributor/detailDistributor";
import DetailHistory from "../pages/Revenue/History/detailHistory";
import Managerole from "../pages/settings/managerole";
import System from "../pages/settings/system";
import Infocategory from "../pages/settings/infocategory";
import ContractCategory from "../pages/settings/contractCategory";
import UpdateWarning from "../pages/settings/contractCategory/updateWarning";
import UpdateContract from "../pages/settings/contractCategory/updateContract";
import UpdateCategory from "../pages/settings/infocategory/updateCategory";
import ChangeRevenue from "../pages/settings/changerevenue";

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
      <Route path="/schedule/add" element={<AddSchedule />} />
      <Route path="/schedule/add/devices" element={<AddDevices />} />
      <Route path="/schedule/detail/:id" element={<DetailSchedule />} />
      <Route path="/schedule/detail/:id/update" element={<UpdateSchedule />} />

      {/* contract  */}
      <Route path="/contract/managecontract" element={<Contract />} />
      <Route
        path="/contract/managecontract/addNewRecord"
        element={<AddNewRecord />}
      />
      <Route path="/contract/managecontract/add" element={<AddContract />} />
      <Route
        path="/contract/managecontract/addExploitationContract"
        element={<AddExploitationContract />}
      />
      <Route
        path="/contract/managecontract/detailAuthorizationContract/:id"
        element={<DetailAuthorizationContract />}
      />
      <Route
        path="/contract/managecontract/detailAuthorizationContract/:id/update"
        element={<UpdateAuthorizationContract />}
      />
      <Route
        path="/contract/managecontract/detailAuthorizationContract/:id/updateRecord"
        element={<UpdateAuthorizationRecord />}
      />
      <Route
        path="/contract/managecontract/detail/:id"
        element={<DetailContract />}
      />
      <Route
        path="/contract/managecontract/detail/:id/savecontract"
        element={<SaveContract />}
      />
      <Route
        path="/contract/managecontract/detail/:id/updateExploitation"
        element={<UpdateExploitationContract />}
      />

      {/* devices  */}
      <Route path="/contract/managedevices" element={<Devices />} />
      <Route
        path="/contract/managedevices/detail/:id"
        element={<DetailDevices />}
      />
      <Route path="/contract/managedevices/add" element={<AddNewDevices />} />

      {/* Operators  */}
      <Route path="/contract/operators" element={<Operators />} />
      <Route
        path="/contract/operators/detail/:id"
        element={<DetailOperator />}
      />
      <Route
        path="/contract/operators/detail/:id/addcustomer"
        element={<AddCustomer />}
      />
      <Route
        path="/contract/operators/detail/:id/info"
        element={<DetailCustomer />}
      />
      <Route
        path="/contract/operators/detail/:id/info/update"
        element={<UpdateCustomer />}
      />
      {/* Authorized  */}
      <Route path="/contract/authorized" element={<Authorized />} />
      <Route
        path="/contract/authorized/:id/update"
        element={<UpdateAuthorized />}
      />
      {/* Revenue  */}
      {/* report  */}
      <Route path="/revenue/report" element={<Report />} />
      <Route path="/revenue/report/detailReport" element={<DetailReport />} />
      <Route
        path="/revenue/report/detailReport/synchdevice/:id"
        element={<SynchDevice />}
      />
      <Route
        path="/revenue/report/detailReport/detailrevenue/:id"
        element={<DetailRevenue />}
      />
      {/* history */}
      <Route path="/revenue/history" element={<History />} />
      <Route path="/revenue/history/detail/:id" element={<DetailHistory />} />
      {/* distributor  */}
      <Route path="/revenue/distributor" element={<Distributor />} />
      <Route
        path="/revenue/distributor/detail/:id"
        element={<DetailDistributor />}
      />
      {/* setting  */}
      <Route path="/setting/managerole" element={<Managerole />} />
      <Route path="/setting/system" element={<System />} />
      <Route path="/setting/infocategory" element={<Infocategory />} />
      <Route path="/setting/infocategory/update" element={<UpdateCategory />} />
      <Route path="/setting/categorycontract" element={<ContractCategory />} />
      <Route
        path="/setting/categorycontract/updateContract"
        element={<UpdateContract />}
      />
      <Route
        path="/setting/categorycontract/updateWarning"
        element={<UpdateWarning />}
      />
      <Route path="/setting/changerevenue" element={<ChangeRevenue />} />
    </Routes>
  );
};

export default Routers;
