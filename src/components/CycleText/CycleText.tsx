import React, { ReactElement, useCallback, useEffect, useState } from 'react';

export default function CycleText(): ReactElement{ 
  const textAboutMe: string[] = ['games', 'music', 'hike', 'coffee'];
  const [currentWord, setCurrentWord] = useState<string>('');

  const cycleText = useCallback((list: string[], index: number): void => {
    setTimeout(() => {
      setCurrentWord(textAboutMe[index]);
      index = index === textAboutMe.length - 1 ? 0 : index + 1;
      cycleText(list, index);
    }, 2000);
  }, [textAboutMe]);

  // const cycleText = useCallback((list: string[]): void => {
  //   setTimeout(() => {
  //     let randomIndex = Math.floor(Math.random() * textAboutMe.length);
  //     setCurrentWord(textAboutMe[randomIndex]);
  //     cycleText(list);
  //   }, 2000);
  // }, [textAboutMe]);

  //to dos -> make currentWord to be different color by giving it a style

  useEffect((): void => {
      // cycleText(textAboutMe);
      cycleText(textAboutMe, 0);
  }, []);

  return (
    <div className='current-word-container'>
      <h3>this is me</h3>
      <h4>{currentWord}</h4>
    </div>
  );

}
