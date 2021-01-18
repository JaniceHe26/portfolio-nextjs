import { AppProps } from 'next/app'
import { useContext } from 'react';
import { ThemeProvider } from '../components/Context/ThemeContext';
import '../styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {

  if (typeof window === 'undefined') { return null }
  return (
    <ThemeProvider>
        <Component {...pageProps} />
    </ThemeProvider>
  )
}