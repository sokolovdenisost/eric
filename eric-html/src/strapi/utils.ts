import showdown from 'showdown';
import config from './config';

const converter = new showdown.Converter();

export const getSingleFile = (image: any) => {
  if (!image || !image.data) return null;

  const { url, formats, caption, mime, height, width, ext, alternativeText } =
    image.data.attributes;

  const newFormats: any = {};

  if (formats) {
    Object.keys(formats).forEach((item: any) => {
      newFormats[item] = {
        media: formats[item],
        src: `${config.IMAGE_URL}${formats[item.url]}`,
      };
    });
  }

  return {
    url: `${config.IMAGE_URL}${url}` || '',
    caption: caption || '',
    mime: mime || '',
    height: height || '',
    width: width || '',
    srcSet: newFormats || null,
    alt: alternativeText || '',
  };
};

export const getAttributes = (data: any) => {
  if (!data.data) return null;

  const item = data.data;

  return {
    id: item.id,
    ...item.attributes,
  };
};

export const getHtml = (data: string) => {
  const text = String(data);

  return text ? converter.makeHtml(text) : null;
};
