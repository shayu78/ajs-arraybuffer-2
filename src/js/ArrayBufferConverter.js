export default class ArrayBufferConverter {
  load(buffer) {
    if (!buffer) throw new Error('Данные для загрузки отсутствуют');
    this.data = new Uint16Array(buffer);
  }

  toString() {
    if (!this.data) throw new Error('Данные для преобразования отсутствуют');
    return String.fromCharCode(...this.data);
  }
}
