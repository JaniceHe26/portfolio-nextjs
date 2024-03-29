import React, { ReactElement, useContext } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { ThemeContext } from '../Context/ThemeContext';

interface LayoutProps {
  children: ReactElement
}

export default function Layout(props: LayoutProps): ReactElement {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Nav />
            <div className={`${theme} layout-container`}>
              {props.children}
            </div>
      <Footer />
    </>
  )
}
