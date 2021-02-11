import React, { useCallback, useEffect, useState } from 'react';
import Circle from '../../services/Circle';

const Shapes: React.FC = () => {
  const [height, setHeight] = useState<number>(window.innerHeight);
  const [width, setWidth] = useState<number>(window.innerWidth);
  //generate different shapes from different point of the screen.

  const generateLocation = useCallback((): void => {
    for (let i = 0; i < 5; i++) {
      let x = Math.floor(Math.random() * height);
      let y = Math.floor(Math.random() * width);
      const circle = new Circle(100, 100, x, y);
      circle.attachToParent();
    }

    //have a queue state, clears it out everytime.
    setTimeout(() => {
      generateLocation();
    }, 2000);
  }, [width, height]);

  useEffect((): void => {
    generateLocation();
  }, []);


  return (
    <div>
      
    </div>
  )
}

export default Shapes;
