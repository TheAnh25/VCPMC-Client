import axios from "axios";
import React from "react";

import Navbar from "../../components/navbar";
import Header from "../../components/header";

const Dashboard = () => {
  return (
    <>
      <div className="bg-[#1E1E2E] min-h-[929px] h-full flex rounded-r-3xl">
        <Navbar />
        <div className="bg-[#1E1E2E] w-full">
          <Header />
          <div className="">b</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
