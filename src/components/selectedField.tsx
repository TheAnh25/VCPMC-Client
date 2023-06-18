import React from "react";
import { Row, Typography, Select } from "antd";
import { selectFieldProps } from "../constants/typecomponent/selectedField";
import "../sass/selectedField.scss";
const SelectedField: React.FC<selectFieldProps> = ({
  title,
  styleTitle,
  styleSelect,
  width,
  ...selectProps
}) => {
  return (
    <div>
      <Select style={styleSelect} {...selectProps} />
    </div>
  );
};

export default SelectedField;
