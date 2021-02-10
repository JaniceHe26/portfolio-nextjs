import { trace } from 'console';
import { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
// import Circle from '../services/Circle';
// import Triangle from '../services/Triangle';
import Square from '../services/Square';

export default function Project(): any {

  useEffect(() => {
  //   const circle = new Circle(50, 50, 500, 500);
  //   circle.attachToParent();
  //   circle.delete();
  //   const triangle = new Triangle(100, 50, 500, 500);
  //   triangle.attachToParent();
    const square = new Square(100, 100, 500, 500);
    square.attachToParent();
      
  }, [])

  return (
    <p>this is the project component</p>
  )
}
