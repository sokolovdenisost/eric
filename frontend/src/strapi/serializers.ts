import { rebuildList, rebuildNews } from './rebuildCollection';
import { rebuildHomePage, rebuildNewsDetailsPage } from 'strapi/rebuildPages';

export const serializeList = (data: any, type: string) => {
  switch (type) {
    case 'news-detail':
      return rebuildNews(data);
      break;
    default:
      return rebuildList(data);
      break;
  }
};

export const serializeSingle = (data: any, type: string) => {
  switch (type) {
    case 'home-page':
      return rebuildHomePage(data);
      break;
    case 'news-details':
      return rebuildNewsDetailsPage(data);
      break;

    default:
      return {
        id: data.id,
        ...data.attributes
      };
      break;
  }
};
