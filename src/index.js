/* eslint-disable no-restricted-syntax */
import { readFileSync } from 'fs';
import _ from 'lodash';

const difference = (obj1, obj2) => {
  const keys1 = _.keys(obj1);
  const keys2 = _.keys(obj2);
  const keys = _.sortBy(_.union(keys1, keys2));
  const result = {}
  for (const key of keys) {
      if (!_.has(obj2, key)) {
        result[`- ${key}`] = obj1[key];
      } else if (!_.has(obj1, key) && _.has(obj2, key)) {
         result[`+ ${key}`] = obj2[key];
      } else if (obj1[key] !== obj2[key]) {
         result[`- ${key}`] = obj1[key];
         result[`+ ${key}`] = obj2[key];
      } 
};

const data = Object.entries(result)
  .map(([key, value]) => `${key}: ${value}`);
   return  ['{', ...data, '}'].join('\n');
};

const generateDiff = (filepath1, filepath2) => {
  const getData = (path) => {
    const dataParse = JSON.parse(readFileSync(path, 'utf-8'));
    return dataParse;
  };

  const data1 = getData(filepath1);
  const data2 = getData(filepath2);

  return difference(data1, data2);
};

export default generateDiff;
