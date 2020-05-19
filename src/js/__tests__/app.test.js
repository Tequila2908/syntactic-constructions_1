
import checkCount from '../app';

test('Number', () => {
  expect(checkCount(10)).toBe(10);
});

test('String Number', () => {
  expect(checkCount('10')).toBe(10);
});

test('String', () => {
  expect(() => checkCount('www')).toThrowError('www не является числом');
});

test('Number + string', () => {
  expect(() => checkCount('e10d')).toThrowError('e10d не является числом');
});

test('Number + sumbol', () => {
  expect(() => checkCount('j10!@@@')).toThrowError('j10!@@@ не является числом');
});

test('8', () => {
  expect(() => checkCount('0o777')).toThrowError('0o777 не является числом');
});

test('16', () => {
  expect(() => checkCount('0xFFFF')).toThrowError('0xFFFF не является числом');
});
