export type SliderType = {
  id: number;
  img: string;
  type:
    | TYPES.BIG_OVAL
    | TYPES.BIG_SQUARE
    | TYPES.SMALL_OVAL
    | TYPES.SMALL_SQUARE;
};

export enum TYPES {
  BIG_OVAL = 'BIG_OVAL',
  SMALL_OVAL = 'SMALL_OVAL',
  BIG_SQUARE = 'BIG_SQUARE',
  SMALL_SQUARE = 'SMALL_SQUARE'
}
