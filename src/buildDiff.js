import _ from 'lodash';

 const buildDiff = (obj1, obj2) => {
  const keys1 = _.keys(obj1);
  const keys2 = _.keys(obj2);
  const keys = _.sortBy(_.union(keys1, keys2));
  const result = {};
  for (const key of keys) {
    if (!_.has(obj2, key)) {
      result[`  - ${key}`] = obj1[key];
    } else if (!_.has(obj1, key) && _.has(obj2, key)) {
      result[`  + ${key}`] = obj2[key];
    } else if (obj1[key] === obj2[key]) {
      result[`    ${key}`] = obj1[key];
    } else if (obj1[key] !== obj2[key]) {
      result[`  - ${key}`] = obj1[key];
      result[`  + ${key}`] = obj2[key];
    }
  }

  const data = Object.entries(result)
  .map(([key, value]) => `${key}: ${value}`);

return ['{', ...data, '}'].join('\n');
};

 export default buildDiff;

 