// export interface LoginProps {
//   errorMessage: string;
//   onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
// }

export interface Auth {
  user: User | null;
}

export interface Role {
  id: number;
  nameRole: string;
}

export interface User {
  id: string | null;
  first_name: string | null;
  last_name: string | null;
  phone_number: string | null;
  email: string | null;
  birthday: Date | null;
  account_login: string | null;
  password: string | null;
  role: Role;
}

export interface Login {
  account_login: string;
  password: string;
}
