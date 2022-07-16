import {
  containsInObject,
  filterOutObjectArray,
  replaceNullWithValue,
  narrowObjectArray
} from '../../../src/index';
import { arrayObj, data, filters, obj } from '../constants/array.constant';

describe('testing array utils', () => {
  test('it should filter objects by the filers', () => {
    expect(filterOutObjectArray({ data, filters })).toEqual([
      { name: 'name2', age: 2, city: 'city2', like: 'like2' },
      { name: 'name3', age: 3, city: 'city1', like: 'like2' }
    ]);
  });

  test('it should return objects that contains the filter', () => {
    expect(narrowObjectArray({ data, contains: filters })).toEqual([
      {
        name: 'name5',
        age: 1,
        city: 'city3',
        like: 'like5'
      }
    ]);
  });

  test('it should replace null value inside object with desired value', () => {
    replaceNullWithValue({ object: obj, value: 'OwO' });
    expect(obj).toEqual({
      a: 'OwO',
      b: 'OwO',
      c: false,
      d: true,
      e: 'false',
      f: 'true',
      g: 'data',
      h: 0,
      i: 1.0
    });
  });

  test('it should replace null value inside array of object with desired value', () => {
    replaceNullWithValue({ object: arrayObj, value: 'OwO' });
    expect(arrayObj).toEqual([
      {
        a: 'OwO',
        b: 'OwO',
        c: false,
        d: true,
        e: 'false',
        f: 'true',
        g: 'data',
        h: 0,
        i: 1.0
      },
      {
        a: 'OwO',
        b: 'OwO',
        c: false,
        d: true,
        e: 'false',
        f: 'true',
        g: 'data',
        h: 0,
        i: 1.0
      }
    ]);
  });

  test('it should return objects that contains the string', () => {
    expect(containsInObject({ data, contains: 'city1' })).toEqual([
      { name: 'name1', age: 1, city: 'city1', like: 'like1' },
      { name: 'name3', age: 3, city: 'city1', like: 'like2' }
    ]);
  });
});
