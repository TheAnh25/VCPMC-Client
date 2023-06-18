export interface CheckboxProps {
  titleCheckbox: string;
  isChecked: boolean;
  onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CheckboxItemProps {
  titleCheckbox: string;

  onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
}
