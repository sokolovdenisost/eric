import { getHtml, getMultiFiles, getSingleFile } from 'strapi/utils';

export const rebuildHomePage = (data: any) => {
  const { id, attributes: at } = data;

  return {
    id,
    ...at,
    runningSlider: at.runningSlider.map((slide: any) => ({
      ...slide,
      image: getSingleFile(slide.image)
    })),
    about: at.about.map((a: any) => ({
      ...a,
      description: getHtml(a.description),
      image: getSingleFile(a.image)
    }))
  };
};

export const rebuildNewsDetailsPage = (data: any) => {
  const { id, attributes: at } = data;

  return {
    id,
    ...at,
    description: getHtml(at.description),
    documents: getMultiFiles(at.documents.data)
  };
};
