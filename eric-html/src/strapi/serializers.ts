import { rebuildList } from './rebuildCollection';
import { rebuildHomePage } from 'strapi/rebuildPages';

export const serializeList = (data: any) => {
  return rebuildList(data);
};

export const serializeSingle = (data: any, type: string) => {
  switch (type) {
    case 'home-page':
      return rebuildHomePage(data);
      break;
    default:
      return {
        id: data.id,
        ...data.attributes,
      };
      break;
  }
};
