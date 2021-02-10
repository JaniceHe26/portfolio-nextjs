import Shape from './Shape';

class Circle extends Shape {
  constructor(width: number, height: number, x: number, y: number) {
    const element = document.createElement('div');
    element.className = 'circle';  

    super(width, height, x, y, element);
  }
}

export default Circle;
