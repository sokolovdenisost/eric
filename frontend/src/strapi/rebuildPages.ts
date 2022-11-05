import { RunningSlide } from 'types/home';
import { getSingleFile } from 'strapi/utils';
import { StrapiImage } from 'types/strapi';

export const rebuildHomePage = (data: any) => {
  const { id, attributes: at } = data;

  return {
    id,
    ...at,
    runningSlider: at.runningSlider.map((slide: RunningSlide<StrapiImage>) => ({
      ...slide,
      image: getSingleFile(slide.image)
    }))
  };
};
