import React from "react";

const Loading = ({ size = 100 }) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div>
        <div
          style={{ width: `${size}px`, height: `${size}px` }}
          className="animate-spin">
          <div className="h-full w-full border-4 border-t-green-500 border-b-green-700 rounded-[50%]"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
