export interface CatItem {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface Card extends CatItem {
  uniqueId: number;
  isMatched: boolean;
}
