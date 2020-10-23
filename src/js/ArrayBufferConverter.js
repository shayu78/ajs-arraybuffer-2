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
