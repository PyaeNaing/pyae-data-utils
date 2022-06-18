import { IFilterArray, INarrowArray, IReplaceNullWithValue } from "./array.utils.type";

/**
 * This function is to filter unwanted data from array
 * This return the array that contains the data in narrow
 * @param {data} data The array of data
 * @param {contains} contains The object that contains the data you wish to filter
 * @returns {data} Modified Data
 */
export const filterArray = ({ data, filters }: IFilterArray) => {
  return data.filter((item: any) => {
    for (const fKey in filters) {
      if (filters[fKey]?.values?.some((val: string) => item[fKey] === val))
        return false;
    }
    return true;
  });
};

/**
 * This function is to narrow down unwanted data from array
 * This return the array that contains the data in narrow
 * @param {data} data The array of data
 * @param {contains} contains The object that contains the data you wish to keep
 * @returns {data} Modified Data
 */
export const narrowArray = ({ data, contains }: INarrowArray) => {
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
 * @param {object} object The object you wish to modify
 * @param {value} value This value you will replace with
 */
export const replaceNullWithValue = ({
  object,
  value,
}: IReplaceNullWithValue) => {
  if (!(object && value)) return;
  Object.keys(object).forEach((key) => {
    const currentVal = object[key];
    if (currentVal === null || currentVal === undefined || currentVal === "") {
      object[key] = value;
    }
  });
};
