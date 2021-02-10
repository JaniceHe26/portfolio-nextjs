import Shape from './Shape';

class Square extends Shape {

  constructor(width: number, height: number, x: number, y: number) {
    const element = document.createElement('div');
    element.className = 'square';  
    
    super(width, height, x, y, element);
  }
}

export default Square;
