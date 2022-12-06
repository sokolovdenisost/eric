export interface ISendMailData {
  [key: string]: string | undefined;
  name: string;
  contactPerson?: string;
  personalAccount?: string;
  address: string;
  email: string;
  phone: string;
  message: string;
}
