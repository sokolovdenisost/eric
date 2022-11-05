import { getSingleFile } from './utils';
import { StrapiData } from 'types/strapi';

export const rebuildList = <T>(data: StrapiData<T>[]) => {
  return data.map((item: StrapiData<T>) => {
    return {
      id: item.id,
      ...item.attributes
    };
  });
};

export const rebuildFilms = <T>(data: T[]) => {
  return data.map((item: T) => {
    const { id, attributes: at } = item;

    return {
      id,
      title: at.title,
      slug: at.slug,
      cover: getSingleFile(at.cover),
      shortVideo: getSingleFile(at.shortVideo)
    };
  });
};
