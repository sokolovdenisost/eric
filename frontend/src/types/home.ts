export type TRunningSlide = {
  id: number;
  title: string;
  description: string;
  type: TYPE_SLIDE;
  image: TImage;
};

export type TSlide = {
  id: number;
  title: string;
  description: string;
  image: TImage;
};

export enum TYPE_SLIDE {
  BIG_OVAL = 'BIG_OVAL',
  SMALL_OVAL = 'SMALL_OVAL',
  BIG_SQUARE = 'BIG_SQUARE',
  SMALL_SQUARE = 'SMALL_SQUARE'
}

export type TImage = {
  url: string;
};

export type TContact = {
  title: string;
  description: string;
};
