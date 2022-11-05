import { rebuildList } from './rebuildCollection';
import { StrapiData } from 'types/strapi';
import { rebuildHomePage } from 'strapi/rebuildPages';

export const serializeList = <T>(data: StrapiData<T>[], type: string) => {
  switch (type) {
    default:
      return rebuildList(data);
      break;
  }
};

export const serializeSingle = (data: any, type: string) => {
  switch (type) {
    case 'home-page':
      return rebuildHomePage(data.data);
      break;

    default:
      return {
        id: data.data.id,
        ...data.data.attributes
      };
      break;
  }
};
