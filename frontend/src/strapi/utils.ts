import showdown from 'showdown';
import config from './config';
import { StrapiData, StrapiImage } from 'types/strapi';

const converter = new showdown.Converter();

export const getSingleFile = (image: StrapiImage) => {
  if (!image || !image.data) return null;

  const { url } = image.data.attributes;

  return {
    url: `${config.IMAGE_URL}${url}` || ''
  };
};

export const getAttributes = <T>(data: StrapiData<T>) => {
  if (!data.data) return null;

  const item = data.data;

  return {
    id: item.id,
    ...item.attributes
  };
};

export const getHtml = (data: string) => {
  const text = String(data);

  return text ? converter.makeHtml(text) : null;
};
