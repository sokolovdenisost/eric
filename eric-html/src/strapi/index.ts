import qs from 'qs';
import Req from './request';
import { serializeList, serializeSingle } from './serializers';
import { rebuildList } from './rebuildCollection';

export const getCollection = async (type: string, params = {}) => {
  const collection = await Req.GET({
    url: `/${type}/`,
    params: {
      populate: '*',
      ...params,
    },
    paramsSerializer: qs.stringify,
    withToken: true,
  });

  return serializeList(collection.data.data);
};

export const getSingle = async (type: string, params = {}) => {
  const document = await Req.GET({
    url: `/${type}/`,
    params: {
      ...params,
    },
    paramsSerializer: qs.stringify,
    withToken: true,
  });

  return serializeSingle(document.data.data, type);
};

export const getSingleBySlug = async (
  type: string,
  slug: string,
  populate: string
) => {
  const document = await Req.GET({
    url: `/${type}/`,
    params: {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate,
    },
    paramsSerializer: qs.stringify,
    withToken: true,
  });

  if (!document.data.data[0]) return null;

  return serializeSingle(document.data.data[0], type);
};

export const getAllPath = async (type: string) => {
  const collection = await Req.GET({
    url: `/${type}/`,
    params: {
      fields: ['id', 'slug'],
      pagination: {
        page: 1,
        pageSize: 100,
      },
    },
    paramsSerializer: qs.stringify,
    withToken: true,
  });

  return rebuildList(collection.data.data);
};
