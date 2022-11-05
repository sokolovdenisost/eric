export type StrapiImage = {
  data: {
    attributes: {
      url: string;
    };
  };
};

export interface StrapiData<T> {
  data: {
    id: string;
    attributes: T;
  };
}
