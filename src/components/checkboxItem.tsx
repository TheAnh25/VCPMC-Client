import React from "react";
import { Checkbox } from "antd";
import { CheckboxItemProps } from "../constants/typecomponent/checkbox";

const CheckBoxItem: React.FC<CheckboxItemProps> = ({
  titleCheckbox,
  ...props
}) => {
  return (
    <div>
      <Checkbox className="text-[#FFFFFF] font-normal text-base">
        {titleCheckbox}
      </Checkbox>
    </div>
  );
};

export default CheckBoxItem;
