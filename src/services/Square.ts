import Shape from './Shape';

class Square extends Shape {
  constructor(width: number, height: number, style: object) {
    super(width, height);
    this.style = {};
  }
}

export default Square;
