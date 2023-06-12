import React from "react";
import Navbar from "../../components/navbar";
import Header from "../../components/header";

const Record = () => {
  return (
    <>
      <div className="bg-[#1E1E2E] min-h-[929px] h-full flex rounded-r-3xl">
        <Navbar />
        <div className=" w-full">
          <Header />
          <div className="text-[#F5F5F5]">Record</div>
        </div>
      </div>
    </>
  );
};

export default Record;
