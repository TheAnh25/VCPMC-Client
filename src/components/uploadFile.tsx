import React from "react";

const UploadFile: React.FC = () => {
  return (
    <div className="border-[1px] flex items-center border-solid border-[#FFAC69] h-9 rounded-md">
      <div className="px-4 text-[#FFAC69] flex items-center justify-center">
        <i className="fa-solid fa-cloud-arrow-up"></i>
        <span>Tải lên</span>
      </div>
    </div>
  );
};

export default UploadFile;
