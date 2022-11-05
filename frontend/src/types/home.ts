import { TYPES } from 'types/slider';

export type HomeContent = {
  runningSlider: RunningSlideType<Image>[];
};

export type RunningSlideType<ImageType> = {
  id: number;
  title: string;
  description: string;
  image: ImageType;
  type: TYPES;
};

export type Image = {
  url: string;
};
