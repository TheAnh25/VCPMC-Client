import React, { useState } from "react";
import { Pagination } from "antd";
import "../sass/panigation.scss";

const Paginations = () => {
  const [current, setCurrent] = useState(1);
  const onChange = (page: any) => {
    setCurrent(page);
  };

  return (
    <Pagination
      defaultCurrent={current}
      onChange={onChange}
      total={50}
      className="text-[#F5F5F5] flex justify-center items-center "
    />
  );
};

export default Paginations;
