import Shape from './Shape';

class Triangle extends Shape {

  constructor(width: number, height: number, x: number, y: number) {
    const element = document.createElement('div');
    element.className = 'triangle';
    element.style.borderLeft = `${height}px solid transparent`;
    element.style.borderRight = `${height}px solid transparent`;

    super(0, 0, x, y, element);

    // triangle has special color needs, we will override the BG color
    element.style.backgroundColor = 'unset';
    element.style.borderBottom = `${width}px solid ${this.getRandomHexColor()}`;
  }
}

export default Triangle;
