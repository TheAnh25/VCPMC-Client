import React from "react";
import { Checkbox } from "antd";
import { CheckboxProps } from "../constants/typecomponent/checkbox";

const CheckBox: React.FC<CheckboxProps> = ({
  isChecked,
  titleCheckbox,
  ...props
}) => {
  return (
    <div>
      <Checkbox
        checked={isChecked}
        className="text-[#FFFFFF] font-normal text-base">
        {titleCheckbox}
      </Checkbox>
    </div>
  );
};

export default CheckBox;
