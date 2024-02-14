import request from '../utils/request';
import { GetCatImagesParams, GetCatImagesResponse } from '../types/endpoints';

export const getCatImages = (
  params?: Partial<GetCatImagesParams>,
): Promise<GetCatImagesResponse> =>
  request({
    url: '/images/search',
    method: 'get',
    params,
  });
