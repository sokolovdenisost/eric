import { runningSlider } from 'types/home';
import { getSingleFile } from 'strapi/utils';

export const rebuildHomePage = (data: any) => {
  const { attributes: at } = data;

  return {
    title: at.title,
    description: at.description,
    contact: at.contact,
    about: at.about,
    runningSlider: at.runningSlider.map((slide: runningSlider) => ({
      ...slide,
      image: getSingleFile(slide.image),
    })),
  };
};
