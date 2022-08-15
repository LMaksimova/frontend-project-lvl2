/* eslint-disable no-restricted-syntax */
import { readFileSync } from 'fs';
import path from 'path';
import parse from './parsers.js';
import buildDiff from './buildDiff.js';


const getDataFormat = (filePath) => path.extname(filePath).substring(1);
const getFormattedContent = (filePath) => {
  const fullPath = path.resolve(process.cwd(), filePath);
  const fileData = readFileSync(fullPath, { encoding: 'utf8', flag: 'r' });
  const dataFormat = getDataFormat(filePath);
  const parsedData = parse(fileData, dataFormat);

  return parsedData;
};

const generateDiff = (filepath1, filepath2) => {
  const data1 = getFormattedContent(filepath1);
  const data2 = getFormattedContent(filepath2);

  return buildDiff(data1, data2);
};

export default generateDiff;
