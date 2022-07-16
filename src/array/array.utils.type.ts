export interface IFilters {
  [key: string]: {
    values: string[];
  };
}
export interface IFilterOutArray {
  data: object[];
  filters: IFilters;
}

export interface INarrowArray {
  data: object[];
  contains: IFilters;
}

export interface IReplaceNullWithValue {
  object:
    | [
        {
          [key: string]: any;
        }
      ]
    | {
        [key: string]: any;
      };
  value: any;
}

export interface IContainsInObject {
  data: object[];
  contains: string;
}
