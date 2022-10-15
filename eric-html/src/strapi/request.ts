import axios from 'axios';
import config from './config';

const METHODS: string[] = ['GET', 'DELETE', 'HEAD', 'POST', 'PUT', 'PATCH'];

type Options = {
  [key: string]: any,
};

const sidedRequest = (opts: Options) => {
  const headers: Options = {};

  if (opts.withToken) {
    headers.authorization = `bearer ${config.TOKEN}`;
  }

  return axios({ baseURL: `${config.API_URL}`, headers, ...opts });
};

const doRequest = (opts: Options) => {
  return sidedRequest(opts);
};

const request = METHODS.reduce((req: Options, method) => {
  req[method] = (opts: Options) => doRequest({ ...opts, method });
  return req;
}, {});

export default request;
