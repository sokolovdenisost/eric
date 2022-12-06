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

export interface ISendInstrumentReadingsData {
  [key: string]: string | undefined;
  name: string;
  address: string;
  gvs1?: string;
  gvs2?: string;
  hvs1?: string;
  hvs2: string;
}
