import { getSingleFile } from './utils';

export const rebuildList = (data: any) => {
  return data.map((item: any) => {
    return {
      id: item.id,
      ...item.attributes
    };
  });
};

export const rebuildNews = (data: any) => {
  return data.map((item: any) => {
    const { id, attributes: at } = item;

    return {
      id,
      ...at,
      image: getSingleFile(at.image),
      date: at?.date ?? at?.createdAt
    };
  });
};
