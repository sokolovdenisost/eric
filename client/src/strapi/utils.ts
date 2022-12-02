import showdown from 'showdown';
import config from './config';

const converter = new showdown.Converter();

export const getSingleFile = (file: any) => {
  if (!file || !file.data) return null;

  const { url, name } = file.data.attributes;

  return {
    name,
    url: `${config.IMAGE_URL}${url}` || ''
  };
};

export const getMultiFiles = (files: any[]) => {
  if (!files) return null;

  return files.map((file: any) => {
    const { url, name } = file.attributes;

    return {
      name,
      url: `${config.IMAGE_URL}${url}` || ''
    };
  });
};

export const getAttributes = (data: any) => {
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
