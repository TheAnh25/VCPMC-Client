export interface IRecord {
  id: string;
  name_record: string;
  id_isrc: string;
  duration: string;
  singer: string;
  expiry_date: Date;
  auth: string;
  category: string;
  start_date: Date;
  format: string;
  status_expiry: IStatus_expiry;
  contract_number: string;
  thumbnail: string;
  producer: string;
}

export interface IStatus_expiry {
  id: number;
  nameRole: string;
}
