// export interface LoginProps {
//   errorMessage: string;
//   onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
// }

export interface Auth {
  user?: User;
}

export interface Role {
  id: number;
  nameRole: string;
}

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  birthday: Date;
  account_login: string;
  password: string;
  role: Role;
  avatar: string;
}

export interface Login {
  account_login: string;
  password: string;
}
