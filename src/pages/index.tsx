import React, { useCallback, useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';

// const wordStyle = {

// }

export default function Index(): any {
  const textAboutMe: string[] = ['games', 'music', 'hike', 'coffee'];
  const [currentWord, setCurrentWord] = useState<string>('');

  const cycleText = useCallback((list: string[], index: number): void => {
    setTimeout(() => {
      setCurrentWord(textAboutMe[index]);
      index = index === textAboutMe.length - 1 ? 0 : index + 1;
      cycleText(list, index);
    }, 2000);
  }, [textAboutMe])

  // const cycleText = useCallback((list: string[]): void => {
  //   setTimeout(() => {
  //     let randomIndex = Math.floor(Math.random() * textAboutMe.length);
  //     setCurrentWord(textAboutMe[randomIndex]);
  //     cycleText(list);
  //   }, 2000);
  // }, [textAboutMe]);

  useEffect((): void => {
      // cycleText(textAboutMe);
      cycleText(textAboutMe, 0);
  }, [])


  return ( 
    <> 
      <Layout>
        <p>{currentWord}</p>
      </Layout>
    </>
  )
}

