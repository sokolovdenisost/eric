export interface IHome {
  title: string;
  description: string;
  runningSlider: RunningSliderType[];
  contacts: {
    address: ContactsType,
    contacts: ContactsType[],
  };
  about: AboutType[];
}

export type RunningSliderType = {
  id: number,
  type: string,
  image: string,
};

export type ContactsType = {
  id: number,
  title: string,
  description: string,
};

export type AboutType = {
  id: number,
  title: string,
  description: string,
};
