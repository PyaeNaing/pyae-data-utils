import { IFilters } from "../../../src";

export const data = [
    {
      name: "name1",
      age: 1,
      city: "city1",
      like: "like1",
    },
    {
      name: "name2",
      age: 2,
      city: "city2",
      like: "like2",
    },
    {
      name: "name3",
      age: 3,
      city: "city1",
      like: "like2",
    },
    {
      name: "name4",
      age: 1,
      city: "city3",
      like: "like4",
    },
    {
      name: "name5",
      age: 1,
      city: "city3",
      like: "like5",
    },
  ];
  
  export const filters: IFilters= {
      like : {
          values : ['like5','like1']
      },
      city: {
          values: ['city3']
      }
  }
  
  export const obj : any = {
      a : '',
      b : null,
      c : false,
      d : true,
      e : 'false',
      f : 'true',
      g : 'data',
      h : 0,
      i : 1.0,
  }