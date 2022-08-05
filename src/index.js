/* eslint-disable no-restricted-syntax */
import { read, readFileSync } from 'fs';
import path from 'path';
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
  const readFile = (path1) => {
    const fullPath = path.resolve(process.cwd(), path1);
    const data = JSON.parse(readFileSync(fullPath, 'utf-8'));
    return data;
  };

  const data1 = readFile(filepath1);
  const data2 = readFile(filepath2);

  return difference(data1, data2);
};

export default generateDiff;
