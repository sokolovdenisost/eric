import axios from 'axios';
import config from './config';

const METHODS = ['GET', 'DELETE', 'HEAD', 'POST', 'PUT', 'PATCH'];

type Options = {
  url: string;
  withToken: boolean;
  params: any;
  paramsSerializer: any;
  method?: string;
};

type Headers = {
  [key: string]: string;
};

type ReqMethods = {
  [key: string]: (opts: Options) => any;
};

const sidedRequest = (opts: any) => {
  const headers: Headers = {};

  if (opts.withToken) {
    headers.authorization = `bearer ${config.TOKEN}`;
  }

  console.log({ baseURL: `${config.API_URL}`, headers, ...opts });

  return axios({ baseURL: `${config.API_URL}`, headers, ...opts });
};

const doRequest = (opts: Options) => {
  return sidedRequest(opts);
};

const request = METHODS.reduce((req: ReqMethods, method: string) => {
  req[method] = (opts) => doRequest({ ...opts, method });
  return req;
}, {});

export default request;
