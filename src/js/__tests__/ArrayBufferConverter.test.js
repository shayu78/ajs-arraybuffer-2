import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../app';

test('class ArrayBufferConverter instanceof', () => {
  expect(new ArrayBufferConverter()).toBeInstanceOf(ArrayBufferConverter);
});

describe('ArrayBufferConverter methods', () => {
  const converter = new ArrayBufferConverter();

  test('ArrayBufferConverter toString throw', () => {
    expect(() => {
      converter.toString();
    }).toThrowError(Error);
  });

  test('ArrayBufferConverter load throw', () => {
    expect(() => {
      converter.load();
    }).toThrowError(Error);
  });

  test('ArrayBufferConverter load', () => {
    converter.load(getBuffer());
    expect(Array.from(converter.data)).toEqual(expect.arrayContaining([
      123, 34, 100, 97, 116, 97, 34, 58, 123, 34, 117, 115, 101, 114,
      34, 58, 123, 34, 105, 100, 34, 58, 49, 44, 34, 110, 97, 109,
      101, 34, 58, 34, 72, 105, 116, 109, 97, 110, 34, 44, 34, 108,
      101, 118, 101, 108, 34, 58, 49, 48, 125, 125, 125]));
  });

  test('ArrayBufferConverter toString', () => {
    expect(converter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  });
});
