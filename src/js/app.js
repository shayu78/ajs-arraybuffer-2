/* eslint-disable no-console */

import ArrayBufferConverter from './ArrayBufferConverter';

export default function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

try {
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer());
  console.log(converter.toString());
  converter.load();
} catch (error) {
  console.error(error.message);
}
