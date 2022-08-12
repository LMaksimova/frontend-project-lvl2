import generateDiff from '../src/index.js';
import { fileURLToPath } from 'node:url';
import { dirname } from 'path';
import path from 'path';
import * as fs from 'fs'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');


test('gendiff', () => {
  expect(generateDiff('__fixtures__/file1.json', '__fixtures__/file2.json')).toEqual(readFile('expected_file.json'));
});