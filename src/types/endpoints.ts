import { AxiosResponse } from 'axios';
import { CatItem } from './cats';

export interface GetCatImagesParams {
  limit: number;
  page: number;
  order: 'ASC' | 'DESC';
}

export type GetCatImagesResponse = AxiosResponse<CatItem[]>;
