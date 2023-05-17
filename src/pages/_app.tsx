
import { NextUIProvider } from '@nextui-org/react'
import type { AppProps } from 'next/app'
import lightTheme from '../../styles/lightTheme'
import darkTheme from '../../styles/darkTheme'
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import '../../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className
        }}
      >
        <NextUIProvider>

          <Component {...pageProps} />
        </NextUIProvider>
      </NextThemesProvider>
    </Provider>
  )
}

export default MyApp
