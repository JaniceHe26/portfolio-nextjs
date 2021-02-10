import Shape from './Shape';

class Circle extends Shape {
  constructor(width: number, height: number, style: object) {
    super(width, height);
    this.style = {};
  }
}

export default Circle;
