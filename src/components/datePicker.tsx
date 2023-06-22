import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";
import React from "react";

const DatePickerComponent = () => {
  return (
    <Space direction="vertical">
      <DatePicker className="w-60" />
    </Space>
  );
};

export default DatePickerComponent;
