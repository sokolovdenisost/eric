import { getAttributes, getHtml, getSingleFile } from './utils';
import { IHome } from 'types/home';

export const rebuildList = (data: any) => {
  return data.map((item: any) => {
    return {
      id: item.id,
      ...item.attributes,
    };
  });
};
