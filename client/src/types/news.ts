export type TNews = {
  title: string;
  description: string;
  createdAt: string;
  date: string | null;
  slug: string;
  image: TImage;
};

type TImage = {
  url: string;
};

export type TDetailNews = {
  title: string;
  description: string | null;
  date: string | null;
  createdAt: string;
  slug: string;
  documents: TDocument[];
};

export type TDocument = {
  name: string;
  url: string;
};
