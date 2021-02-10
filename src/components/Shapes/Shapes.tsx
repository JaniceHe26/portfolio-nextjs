import React, { useCallback, useEffect, useState } from 'react';

const Shapes: React.FC = () => {
  const coordination: Map<number, number[]> = new Map();
  const [height, setHeight] = useState<number>(window.innerHeight);
  const [width, setWidth] = useState<number>(window.innerWidth);
  //generate different shapes from different point of the screen.

  const generateLocation = useCallback((width: number, height: number, coordination: Map<number, number[]>): void => {
    setTimeout(() => {
      for (let i = 0; i < 5; i++) {
        let x = Math.floor(Math.random() * height);
        let y = Math.floor(Math.random() * width);
        console.log(x,y);
        if (!coordination.has(i)) {
          coordination.set(i, [x, y]);
        }
      }
    }, 2000);
  }, [coordination]);

  useEffect((): void => {
    generateLocation(width, height, coordination);
  }, []);


  const generateDivs = (): any => {
    setTimeout(() => {
      for (let i = 0; i < 5; i++) {
        return (
          <div></div>
        )
      }
    }, 2000);
  }

  return (
    <>
    {generateDivs}
    </>
  )
}

export default Shapes;
