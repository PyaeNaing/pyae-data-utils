export interface IFilterArray {
  data: object[];
  filters: {
    [key: string]: {
      values: string[];
    };
  };
}

export interface INarrowArray {
  data: object[];
  contains: {
    [key: string]: {
      values: string[];
    };
  };
}

export interface IReplaceNullWithValue {
  object: {
    [key: string]: any;
  };
  value: any;
}
