import Shape from './Shape';

class Triangle extends Shape {
  constructor(width: number, height: number, style: object) {
    super(width, height);
    this.style = {};
  }
}

export default Triangle;
