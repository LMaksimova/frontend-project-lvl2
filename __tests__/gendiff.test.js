import generateDiff from '../src/index.js';

const difference = 
`{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;
  
test('gendiff', () => {
  expect(generateDiff('/home/lyudmila/frontend-project-lvl2/__fixtures__/file1.json', '/home/lyudmila/frontend-project-lvl2/__fixtures__/file2.json')).toEqual(difference);
});
