/* eslint-disable no-console */

export function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

export default class ArrayBufferConverter {
  load(buffer) {
    if (buffer !== undefined) this.data = new Uint16Array(buffer);
    else throw new Error('Данные для загрузки отсутствуют');
  }

  toString() {
    if (this.data) return String.fromCharCode(...this.data);
    throw new Error('Данные для преобразования отсутствуют');
  }
}

try {
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer());
  console.log(converter.toString());
  converter.load();
} catch (error) {
  console.error(error.message);
}
