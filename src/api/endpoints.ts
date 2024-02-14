import request from '../utils/request';

export const getCatImages = (params: object) =>
  request({
    url: '/images/search',
    method: 'get',
    params,
  });
