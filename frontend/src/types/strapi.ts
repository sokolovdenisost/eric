export type StrapiImage = {
  data: {
    attributes: {
      url: string;
      name: string;
    };
  };
};

export interface StrapiData<T> {
  data: {
    id: string;
    attributes: T;
  };
}
