import {
  IContainsInObject,
  IFilterOutArray,
  INarrowArray,
  IReplaceNullWithValue
} from './array.utils.type';

/**
 * This function is to filter unwanted data from array
 * This return the array that does not contains the data listed in filters
 * @param {data} data The array of data
 * @param {contains} contains The object that contains the data you wish to filter out
 * @returns {data} Modified Data
 */
export const filterOutObjectArray = ({
  data,
  filters
}: IFilterOutArray): object[] => {
  return data.filter((item: any) => {
    for (const fKey in filters) {
      if (filters[fKey]?.values?.some((val: string) => item[fKey] === val))
        return false;
    }
    return true;
  });
};

/**
 * This function is to narrow down data from array to show the one you desires
 * This return the array that contains the data in narrow
 * @param {data} data The array of data
 * @param {contains} contains The object that contains the data you wish to keep
 * If contains have multiple key, it will only return objects that contains all of key values.
 * @returns {data} Modified Data
 */
export const narrowObjectArray = ({
  data,
  contains
}: INarrowArray): object[] => {
  return data.filter((item: any) => {
    for (const fKey in contains) {
      if (!contains[fKey]?.values?.some((val: string) => item[fKey] === val))
        return false;
    }
    return true;
  });
};

/**
 * This function will replace empty values inside the objects
 * @param {object} object The object / array of object you wish to modify
 * @param {value} value This value you will replace with
 */
export const replaceNullWithValue = ({
  object,
  value
}: IReplaceNullWithValue): void => {
  if (!(object && !(value === undefined || value === null))) return;
  if (!Array.isArray(object)) {
    replaceNullWithValue({ object: [object], value });
    return;
  }
  object.forEach((item) => {
    Object.keys(item).forEach((key) => {
      const currentVal = item[key];
      if (
        currentVal === null ||
        currentVal === undefined ||
        currentVal === ''
      ) {
        item[key] = value;
      }
    });
  });
};

/**
 * This function will return objects that contains the string and filter out the rest
 * @param {data} data the array of data
 * @returns filtered Data
 */
export const containsInObject = ({
  data,
  contains
}: IContainsInObject): object[] => {
  return data.filter((item: any) => {
    for (const key in item) {
      if (item[key] === contains) {
        return true;
      }
    }
    return false;
  });
};
