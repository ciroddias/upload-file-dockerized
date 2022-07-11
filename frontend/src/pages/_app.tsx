import '../styles/globals.ts'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/globals'
import theme from '../styles/theme'
import { UploadProgressProvider } from '../contexts/uploadProgressContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <UploadProgressProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </UploadProgressProvider>
    </ThemeProvider>

  )
}

export default MyApp
